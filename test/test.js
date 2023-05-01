const { expect } = require('chai');
const PreSales = artifacts.require("PreSales");
const MyToken = artifacts.require("MyToken");

contract("PreSales", (accounts) => {
    let preSales, token;
    const owner = accounts[0];
    const buyer1 = accounts[1];
    const buyer2 = accounts[2];

    beforeEach(async () => {
        token = await MyToken.new("My Token", "MTK", 18, 1000000000000000000000000, {from: owner});
        preSales = await PreSales.new(token.address, {from: owner});

        // Transfer some tokens to the PreSales contract
        await token.transfer(preSales.address, web3.utils.toWei("1000", "ether"), {from: owner});
    });

    it("should enable and disable the pre-sale", async () => {
        expect(await preSales.preSalesEnabled()).to.be.false;

        await preSales.setPreSalesEnabled(true, {from: owner});
        expect(await preSales.preSalesEnabled()).to.be.true;

        await preSales.setPreSalesEnabled(false, {from: owner});
        expect(await preSales.preSalesEnabled()).to.be.false;
    });

    it("should not allow non-owners to enable or disable the pre-sale", async () => {
        await expectRevert(
            preSales.setPreSalesEnabled(true, {from: buyer1}),
            "Ownable: caller is not the owner"
        );
    });

    it("should allow users to buy tokens during pre-sale", async () => {
        // Enable pre-sale
        await preSales.setPreSalesEnabled(true, {from: owner});

        const amountToBuy = web3.utils.toWei("0.1", "ether");
        const expectedTokens = amountToBuy * 10 ** 18 / (await preSales.coinPrice());

        // Buy tokens
        await preSales.buy({from: buyer1, value: amountToBuy});

        // Check that the tokens were locked in the TokenTimelock contract
        const lockContracts = await preSales.getAccountLockContracts(buyer1);
        const tokenTimelock = await TokenTimelock.at(lockContracts[0]);
        expect(await token.balanceOf(tokenTimelock.address)).to.be.bignumber.equal(expectedTokens.toString());
    });

    it("should not allow users to buy tokens when pre-sale is disabled", async () => {
        await expectRevert(
            preSales.buy({from: buyer1, value: web3.utils.toWei("0.1", "ether")}),
            "PreSales: sale is not enabled"
        );
    });

    it("should allow the owner to withdraw collected funds", async () => {
        // Enable pre-sale
        await preSales.setPreSalesEnabled(true, {from: owner});

        const amountToBuy = web3.utils.toWei("0.1", "ether");

        // Buy tokens
        await preSales.buy({from: buyer1, value: amountToBuy});

        // Check the initial owner balance
        const initialBalance = await web3.eth.getBalance(owner);

        // Withdraw the collected funds
        await preSales.withdraw({from: owner});

        // Check the owner balance after withdrawal
        const finalBalance = await web3.eth.getBalance(owner);
        expect(web3.utils.toBN(finalBalance)).to.be.bignumber.gt(web3.utils.toBN(initialBalance));
    });

    it("should not allow non-owners to withdraw funds", async () => {
        await expectRevert(
            preSales.withdraw({from: buyer1}),
            "Ownable: caller is not the owner"
        );
    });

    it("should release tokens from timelock after release time", async () => {
        // Enable pre-sale
        await preSales.setPreSalesEnabled(true, {from: owner});

        const amountToBuy = web3.utils.toWei("0.1", "ether");

        // Buy tokens
        await preSales.buy({from: buyer1, value: amountToBuy});

        const lockContracts = await preSales.getAccountLockContracts(buyer1);
        const tokenTimelock = await TokenTimelock.at(lockContracts[0]);

        const releaseTime = await tokenTimelock.releaseTime();
        const timeToRelease = releaseTime - Math.floor(Date.now() / 1000);

        // Try to release tokens before release time
        await expectRevert(
            tokenTimelock.release({from: buyer1}),
            "TokenTimelock: current time is before release time"
        );

        // Advance time to releaseTime + 1
        await time.increase(timeToRelease + 1);

        // Release tokens after release time
        await tokenTimelock.release({from: buyer1});

        // Check buyer1 token balance
        const buyer1TokenBalance = await token.balanceOf(buyer1);
        expect(buyer1TokenBalance).to.be.bignumber.equal(web3.utils.toWei("0.1", "ether"));
    });
});


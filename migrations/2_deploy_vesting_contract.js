require("dotenv").config();

const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");

const fs = require("fs");
const PreSalesJSON = require("./build/contracts/PreSales.json");

function sleep(s) {
  return new Promise(resolve => setTimeout(resolve, s * 1000));
}

async function main() {
  const provider = new HDWalletProvider(
    process.env.MNEMONIC,
    process.env.INFURA_ENDPOINT
  );
  const web3 = new Web3(provider);

  const accounts = await web3.eth.getAccounts();

  console.log("Deploying contracts with the account:", accounts[0]);

  console.log(
    "Account balance:",
    (await web3.eth.getBalance(accounts[0])).toString()
  );

  const PreSales = new web3.eth.Contract(PreSalesJSON.abi);
  const deployedPreSales = await PreSales.deploy({
    data: PreSalesJSON.bytecode,
    arguments: [process.env.DRVN_COIN_ADDRESS]
  })
    .send({
      from: accounts[0],
      gas: 6000000
    });

  console.log("contract address", deployedPreSales.options.address);

  await sleep(60);

  // Truffle doesn't have an equivalent for Hardhat's verify plugin
  // Use Etherscan or other block explorer to manually verify the contract

  // If you still want to verify the contract using the API, refer to the Etherscan API documentation:
  // https://etherscan.io/apis#contracts
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
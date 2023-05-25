FROM node:16 

COPY . .

RUN yarn
RUN yarn build

EXPOSE 3000
CMD yarn serve
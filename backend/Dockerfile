FROM node:lts-alpine

RUN mkdir -p /home/node/api/node_modules
RUN chown -R node:node /home/node/api

WORKDIR /home/node/api

COPY package.json yarn.* ./

USER node

RUN yarn

COPY --chown=node:node . .

EXPOSE 3333

CMD yarn typeorm migration:run & yarn start

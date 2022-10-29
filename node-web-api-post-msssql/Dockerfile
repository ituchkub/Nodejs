FROM node:16 as base

USER node

LABEL maintainer="Chayangkoon Tona <chayangkoontona@gmail.com>"

RUN mkdir /home/node/.npm-global ; \
  mkdir -p /home/node/app ; \
  mkdir -p /home/node/app/logs ; \
  touch /home/node/app/logs/log.txt ; \
  chown -R node:node /home/node/app ; \
  chown -P node:node /home/node/app/logs ; \
  chown -R node:node /home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

WORKDIR /home/node/app

COPY package.json ./

RUN npm i

COPY . .

FROM base as develop

ENV PORT 3000

# EXPOSE ${PORT}

ENV NODE_PATH=./dist

# RUN npm run build

CMD [ "npm", "start" ]
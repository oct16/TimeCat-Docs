FROM node:16.9.1-alpine3.12
LABEL maintainer="oct16"

COPY . /app
WORKDIR /app

RUN yarn config set registry https://registry.npmmirror.com
RUN yarn global add http-server
RUN yarn global add pm2@5.1.1
RUN yarn install
RUN yarn build

EXPOSE 5500

CMD pm2-runtime ecosystem.config.js --only timecat-docs

FROM node:alpine

WORKDIR '/app'

COPY package.json .

RUN npm install -g npm@7.8.0

RUN npm install --force

COPY . .

RUN npm run build

EXPOSE 3000

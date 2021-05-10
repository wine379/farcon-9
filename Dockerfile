FROM node:alpine AS builder

WORKDIR '/app'

COPY package.json .

RUN npm install -g npm@7.8.0

RUN npm install

COPY . .

RUN npm run build

FROM nginx

EXPOSE 8080

COPY --from=builder /app/build /usr/share/nginx/html
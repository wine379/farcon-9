FROM node:alpine as builder
WORKDIR '/app'
COPY ./package.json ./
RUN apt-get update || : && apt-get install python -y
RUN yarn install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
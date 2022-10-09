FROM node:alpine as builder
WORKDIR /var/www/react-app-production-docker
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /var/www/react-app-production-docker/build /usr/share/nginx/html
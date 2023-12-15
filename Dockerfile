FROM node:14 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
 
RUN npm run build

FROM nginx:1.17.1-alpine

WORKDIR /etc/nginx

RUN ls -la

CMD ["nginx", "-g", "daemon off;"]

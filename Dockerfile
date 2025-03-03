# Базовый образ в котором собирается фронт
FROM node:18 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build && ls -la /app
#doto: можно удалить скопированный файлы после сборки, чтобы уменьшить вес образа

# Разворачиваем Nginx который будет отдавать собранную статику
FROM nginx:1.19-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
#Внутри /etc/nginx/ лежит общий nginx.conf, который генерируется сам, и в нем есть include *.conf из /conf.d
#в conf.d/ мы кладем свой конфиг, который затем встраивается в nginx.conf (в целом можно сразу nginx.conf готовый копировать)
COPY default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
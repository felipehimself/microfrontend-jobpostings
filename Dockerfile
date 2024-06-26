FROM node:alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist/microfrontend-jobpostings /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
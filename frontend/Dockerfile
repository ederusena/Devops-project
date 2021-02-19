FROM node:8 as builder
ARG NPM_ENV=development

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY src/ ./src/
COPY public/ ./public/
RUN npm run build:${NPM_ENV}

FROM nginx:1.15.5
COPY --from=builder /usr/src/app/build/ /usr/share/nginx/html
EXPOSE 80
# docker build -t frontend .
# docker run -d -p 80:80 frontend

# Registry
# docker build -t ederusena/frontend:alpha .
# docker push ederusena/frontend:alpha
FROM node:8
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3020
CMD ["npm","start"]
# docker build -t backend-user .
# docker run -d -p 3022:3020 backend-user


# Registry
# docker build -t ederusena/backend-user:alpha .
# docker push ederusena/backend-user:alpha
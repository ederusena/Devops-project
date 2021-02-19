FROM node:8
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3030
CMD ["npm","start"]
# docker build -t backend-scm .
# docker run -d -p 3030:3030 backend-scm 
# Registry
# docker build -t ederusena/backend-scm:alpha .
# docker push ederusena/backend-scm:alpha
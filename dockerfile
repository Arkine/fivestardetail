FROM node:8

WORKDIR /usr/app/src

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["run", "start"]
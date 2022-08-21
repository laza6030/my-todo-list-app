FROM node:14.16.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm cache clean --force && npm install

COPY . .

EXPOSE 4001

CMD ["npm", "run", "start:dev"]

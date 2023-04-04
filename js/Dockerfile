FROM node:9-slim
WORKDIR /app

COPY package*.json ./

RUN npm i

COPY main.js /app

EXPOSE 3000

CMD ["node", "main.js"]
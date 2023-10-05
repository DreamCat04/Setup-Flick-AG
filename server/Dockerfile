FROM node:16.9.0-bullseye-slim

COPY server.js /app/server.js
COPY package-lock.json /app/package-lock.json
COPY package.json /app/package.json
WORKDIR /app

RUN npm ci
EXPOSE 5000
ENTRYPOINT ["node", "./server.js"]
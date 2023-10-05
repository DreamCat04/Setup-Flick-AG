FROM node:16.9.0-bullseye-slim

WORKDIR /app
COPY /server/server.js /server/package.json /server/package-lock.json /app/
RUN npm ci

EXPOSE 5000
ENTRYPOINT ["node", "server.js"]
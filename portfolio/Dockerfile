FROM node:16.9.0-bullseye-slim

COPY . /app
WORKDIR /app
RUN npm ci
EXPOSE 3000
ENTRYPOINT ["npm", "start"]
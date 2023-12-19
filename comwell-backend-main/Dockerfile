# Use a Node.js base image lightweight linux img
FROM node:20.3.1-alpine

WORKDIR /comwell-backend-main

COPY package*.json ./

# install depedencies
RUN npm install

COPY . .

# Run build
RUN npm run build

EXPOSE 2000

CMD ["npm", "run", "start:dev"]

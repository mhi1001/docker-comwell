# Use a Node.js base image lightweight linux img
FROM node:20.3.1-alpine

WORKDIR /comwell-frontend-main

COPY package*.json ./

#Install dependencies
RUN npm install

COPY . .

# Run build with --no-verify to ignore linting errors
RUN npm run build --no-verify

EXPOSE 3000

CMD ["npm", "start"]

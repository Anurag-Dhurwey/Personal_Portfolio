FROM node:18-alpine
WORKDIR /src/portfolio
COPY ./package*.json ./
RUN npm install
COPY ./ ./
CMD ["npm", "run","dev"]
EXPOSE 3000

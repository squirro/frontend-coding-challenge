FROM node:14-alpine

LABEL version="1.0"
LABEL description="Book Store API"

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm ci

COPY . .

EXPOSE 8000

CMD ["npm", "start"]

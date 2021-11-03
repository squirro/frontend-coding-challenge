FROM node:14-alpine

LABEL version="0.1.0"
LABEL description="Book Store UI"

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

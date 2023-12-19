# Development stage
FROM node:18-alpine as development
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .
CMD ["yarn", "start:dev"]

# Production stage
FROM node:18-alpine as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install --only=production
COPY . .
CMD ["yarn", "start:prod"]

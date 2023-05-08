FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm ci

# Environment must be set in the Dockerfile for the production build
ENV REACT_APP_BACKEND_URL=http://localhost:8080/api

RUN CI=true npm test

RUN npm run build

RUN npm install -g serve

# Serves the static files in the folder "build"
CMD ["serve", "build"]
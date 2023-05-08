# For my-app/backend 
FROM node:18

WORKDIR /usr/src/app

COPY . .

COPY --chown=node:node . .
# Change npm ci to npm install since we are going to be in development mode
RUN npm install

ENV DEBUG=playground:*

USER node
CMD ["npm", "run", "dev"]
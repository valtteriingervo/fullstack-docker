# For my-app/backend 
FROM node:18

WORKDIR /usr/src/app

COPY --chown=node:node . .
# npm install since we are going to be in development mode
RUN npm install

ENV DEBUG=playground:*

USER node
CMD ["npm", "run", "dev"]
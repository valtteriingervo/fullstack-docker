FROM node:18

WORKDIR /usr/src/app

COPY --chown=node:node . .
# npm ci for backend prod
RUN npm ci 

ENV DEBUG=playground:*

USER node
# npm start for backend prod
CMD npm start 
FROM node:12.18.3-alpine

RUN mkdir -p /dist/qa

WORKDIR /dist/qa

COPY . /dist/qa

RUN npm install

RUN npm run build

RUN cd server && npm install

EXPOSE 3001

CMD ["npm", "run", "server"]

# What image do you want to start building on?
FROM node:12.18.3-alpine

# Make a folder in your image where your app's source code can live
RUN mkdir -p /dist/qa

# Tell your container where your app's source code will live
WORKDIR /dist/qa

# What source code do you want to copy, and where to put it?
COPY . /dist/qa

# Does your app have any dependencies that should be installed?
RUN npm install

RUN npm run build

RUN cd server && npm install

# What port will the container talk to the outside world with once created?
EXPOSE 3001

# How do you start your app?
CMD ["npm", "run", "server"]

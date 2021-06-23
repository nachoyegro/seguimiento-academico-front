FROM node:16-alpine

# set working directory
RUN mkdir /app
WORKDIR /app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install react-scripts@1.1.1 -g
RUN npm install -g serve

COPY . ./

RUN npm run build


CMD ["serve", "-s", "build", "-l", "3000"]
FROM node:12.2.0-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
# COPY . .
COPY ./node_modules /app/node_modules
COPY ./build /app/build
# RUN npm install
# CMD ["npm", "run", "build"]
CMD ["npm", "run", "build:serve"]

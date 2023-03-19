FROM node:16

WORKDIR /app

COPY package*.json ./

RUN apt-get update && apt-get install -y python make
ENV PYTHON /usr/bin/python3

# Others
RUN npm install --global node-gyp

RUN npm install && \
    npm install sequelize sequelize-typescript oracledb

COPY . .

CMD ["npm", "run", "start:dev"]

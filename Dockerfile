FROM node:14.15.4

# Instala el cliente de Oracle
RUN apt-get update && \
    apt-get install -y libaio1 wget && \
    mkdir /opt/oracle && \
    cd /opt/oracle && \
    wget https://download.oracle.com/otn_software/linux/instantclient/199000/instantclient-basic-linux.x64-19.9.0.0.0dbru.zip && \
    unzip instantclient-basic-linux.x64-19.9.0.0.0dbru.zip && \
    rm -f instantclient-basic-linux.x64-19.9.0.0.0dbru.zip && \
    sh -c "echo /opt/oracle/instantclient_19_9 > /etc/ld.so.conf.d/oracle-instantclient.conf" && \
    ldconfig

WORKDIR /app

COPY package*.json ./

RUN apt-get update && apt-get install -y python make
ENV PYTHON /usr/bin/python3

# Others
RUN npm install --global node-gyp

RUN npm install && \
    npm install typeorm @nestjs/typeorm oracledb

COPY . .

# Expone el puerto 3000
EXPOSE 3000

CMD ["npm", "run", "start:dev"]


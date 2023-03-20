import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SequelizeModule } from '@nestjs/sequelize';
// import * as oracledb from 'oracledb';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrestamoModule } from './modules/prestamo/prestamo.module';
import { SucursalModule } from './modules/sucursal/sucursal.module';
import { Sucursal } from './modules/sucursal/models/sucursal.model';
import { ConnectionOptions } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () =>
        ({
          type: 'oracle',
          host: '172.20.0.2', // el nombre de su contenedor Docker
          port: 1521, // el puerto expuesto por su contenedor
          username: 'system',
          password: 'oracle',
          sid: 'xe', // o el nombre de su servicio
          synchronize: true,
          entities: [Sucursal],
        } as ConnectionOptions),
    }),
    SucursalModule,
    // PrestamoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

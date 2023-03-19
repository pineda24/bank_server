import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SequelizeModule } from '@nestjs/sequelize';
// import * as oracledb from 'oracledb';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrestamoModule } from './modules/prestamo/prestamo.module';
import { SucursalModule } from './modules/sucursal/sucursal.module';
import { Prestamo } from './modules/prestamo/models/prestamo.model';
import { Sucursal } from './modules/sucursal/models/sucursal.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'oracle',
      host: 'localhost',
      port: 3002,
      username: 'system',
      password: 'oracle',
      sid: 'XE',
      entities: [Sucursal],
      synchronize: false,
    }),
    SucursalModule,
    // PrestamoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

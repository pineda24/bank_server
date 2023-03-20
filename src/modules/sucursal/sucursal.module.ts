import { Module } from '@nestjs/common';
import { SucursalService } from './sucursal.service';
import { SucursalController } from './sucursal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Sucursal } from './models/sucursal.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forFeature([Sucursal]),
  ],
  controllers: [SucursalController],
  providers: [SucursalService],
})
export class SucursalModule {
  constructor(private dataSource: DataSource) {}
}

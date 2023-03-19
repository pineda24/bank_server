import { Module } from '@nestjs/common';
import { SucursalService } from './sucursal.service';
import { SucursalController } from './sucursal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Sucursal } from './models/sucursal.model';

@Module({
  imports:[
    TypeOrmModule.forFeature([Sucursal])
  ],
  controllers: [SucursalController],
  providers: [SucursalService]
})
export class SucursalModule {
  constructor(private dataSource: DataSource) {}
}

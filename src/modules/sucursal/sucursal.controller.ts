import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Sucursal } from './models/sucursal.model';
import { SucursalService } from './sucursal.service';

@Controller('sucursal')
export class SucursalController {
  constructor(private readonly sucursalService: SucursalService) {}

  @Post()
  create(@Body() createSucursalDto: Sucursal) {
    return this.sucursalService.create(createSucursalDto);
  }

  @Get()
  findAll() {
    return this.sucursalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sucursalService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSucursalDto: Sucursal) {
    return this.sucursalService.update(id, updateSucursalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sucursalService.remove(id);
  }
}

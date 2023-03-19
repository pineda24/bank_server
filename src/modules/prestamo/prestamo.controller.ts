import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Prestamo } from './models/prestamo.model';
import { PrestamoService } from './prestamo.service';

@Controller('prestamo')
export class PrestamoController {
  constructor(private readonly prestamoService: PrestamoService) {}

  @Post()
  create(@Body() createPrestamoDto: Prestamo) {
    return this.prestamoService.create(createPrestamoDto);
  }

  @Get()
  findAll() {
    return this.prestamoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prestamoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrestamoDto: Prestamo) {
    return this.prestamoService.update(id, updatePrestamoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prestamoService.remove(id);
  }
}

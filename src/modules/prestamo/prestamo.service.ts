import { Injectable } from '@nestjs/common';
import { Prestamo } from './models/prestamo.model';

@Injectable()
export class PrestamoService {
  create(createPrestamoDto: Prestamo) {
    return 'This action adds a new prestamo';
  }

  findAll() {
    return `This action returns all prestamo`;
  }

  findOne(id: string) {
    return `This action returns a #${id} prestamo`;
  }

  update(id: string, updatePrestamoDto: Prestamo) {
    return `This action updates a #${id} prestamo`;
  }

  remove(id: string) {
    return `This action removes a #${id} prestamo`;
  }
}

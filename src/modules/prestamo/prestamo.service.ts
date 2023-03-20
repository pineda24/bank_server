import { Injectable } from '@nestjs/common';

@Injectable()
export class PrestamoService {
  create(createPrestamoDto: any) {
    return 'This action adds a new prestamo';
  }

  findAll() {
    return `This action returns all prestamo`;
  }

  findOne(id: string) {
    return `This action returns a #${id} prestamo`;
  }

  update(id: string, updatePrestamoDto: any) {
    return `This action updates a #${id} prestamo`;
  }

  remove(id: string) {
    return `This action removes a #${id} prestamo`;
  }
}

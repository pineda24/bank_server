import { Injectable } from '@nestjs/common';
import { Sucursal } from './models/sucursal.model';

@Injectable()
export class SucursalService {
  create(createSucursalDto: Sucursal) {
    return 'This action adds a new sucursal';
  }

  findAll() {
    return `This action returns all sucursal`;
  }

  findOne(id: string) {
    return `This action returns a #${id} sucursal`;
  }

  update(id: string, updateSucursalDto: Sucursal) {
    return `This action updates a #${id} sucursal`;
  }

  remove(id: string) {
    return `This action removes a #${id} sucursal`;
  }
}

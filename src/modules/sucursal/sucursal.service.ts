import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sucursal } from './models/sucursal.model';

@Injectable()
export class SucursalService {
  constructor(
    @InjectRepository(Sucursal)
    private usersRepository: Repository<Sucursal>,
  ) {}

  create(createSucursalDto: Sucursal) {
    return 'This action adds a new sucursal';
  }

  findAll() {
    console.log("HSHJSHSHDGHDGDG")
    return this.usersRepository.find();
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

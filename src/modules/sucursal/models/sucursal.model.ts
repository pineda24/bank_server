import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('sucursal')
export class Sucursal {
  @PrimaryColumn({name: 'idsucursal', type: 'varchar', length: 5})
  id: string;

  @Column({name: 'nombresucursal', type: 'varchar', length: 15})
  nombre: string;

  @Column({name: 'ciudadsucursal', type: 'varchar', length: 15})
  ciudad: string;

  @Column({name: 'activos', type: 'number'})
  activos: number;

  @Column({name: 'region', type: 'number'})
  region: number;
}

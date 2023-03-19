import { AutoMap } from '@nartc/automapper';
import { Model, Table, Column, Length, ForeignKey, NotNull } from 'sequelize-typescript';
import { Expose } from 'class-transformer';
import { Sucursal } from 'src/modules/sucursal/models/sucursal.model';

@Table({
    modelName:"Sucursal",
    tableName:"Sucursal",
    freezeTableName:true,
    schema:"Sucursal"
})
export class Prestamo extends Model<Prestamo> {

    @Expose()
    @Column
    noprestamo: string;

    @Expose()
    @ForeignKey(() => Sucursal)
    @Column
    idsucursal: string;

    @Expose()
    @Column
    cantidad: number;

    static get modelName(): string {
        return 'Sucursal';
    }
}
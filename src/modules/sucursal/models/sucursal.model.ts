import { AutoMap } from '@nartc/automapper';
import { Model, Table, Column, Length, ForeignKey, NotNull } from 'sequelize-typescript';
import { Expose } from 'class-transformer';

@Table({
    modelName:"Sucursal",
    tableName:"Sucursal",
    freezeTableName:true,
    schema:"Sucursal"
})
export class Sucursal extends Model<Sucursal> {

    @Expose()
    @Column
    idsucursal: string;

    @Expose()
    @Column
    nombresucursal: string;

    @Expose()
    @Column
    ciudadsucursal: number;

    @Expose()
    @Column
    activos: number;

    @Expose()
    @Column
    region: number;

    static get modelName(): string {
        return 'Sucursal';
    }
}
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

@Entity('datos_contactos')
export class DatosContacto {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'bigint' })
    celular!: number;

    @Column({ type: 'varchar', length: 255 })
    direccion!: string;

    @Column({ type: 'varchar', length: 100 })
    ciudad!: string;

    @Column({ type: 'varchar', length: 100 })
    pais!: string;

    @Column({ type: 'varchar', length: 100 })
    departamento!: string;

}

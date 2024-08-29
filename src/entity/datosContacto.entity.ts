import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

@Entity('datos_contactos')
export class DatosContacto {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'bigint', unique:true})
    celular!: number;

    @Column({ type: 'varchar', length: 255, unique:true })
    correo_institucional!: string;

    @Column({ type: 'varchar', length: 100 })
    ciudad!: string;

    @Column({ type: 'varchar', length: 100 })
    pais!: string;

    @Column({ type: 'varchar', length: 100 })
    departamento!: string;

}

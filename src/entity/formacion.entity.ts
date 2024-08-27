import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity('formaciones')
export class Formacion {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255 })
    tipo!: string;

    @Column({ type: 'date' })
    fecha_inicio!: string;

    @Column({ type: 'date' })
    fecha_final!: string;

    @Column({ type: 'varchar', length: 255 })
    certificado_url!: string;


    @ManyToOne(() => Usuario, (usuario) => usuario.formacion)
    usuario!:Usuario


    // Relaciones se agregarán más adelante
}

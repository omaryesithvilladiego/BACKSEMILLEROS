import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, JoinColumn } from 'typeorm';
import { Usuario } from './usuario.entity';
import { Compromiso } from './compromiso.entity';

export enum EstadosProyecto {
    PROPUESTA = 'Propuesta',
    DESARROLLO = 'En desarrollo',
    REVISION = 'En revision',
    CERRADO = 'Cerrado',
    CANCELADO = 'Cancelado',
    PUBLICADO = 'Publicado',
    FINALIZADO = 'Finalizado'
}

@Entity('proyectos')
export class Proyecto {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255 })
    nombre!: string;

    @Column({ type: 'text' })
    resultados_esperados!: string;

    @Column({ type: 'date' })
    fecha_inicio!: string;

    @Column({ type: 'date' })
    fecha_final!: string;

    @Column({
        type: 'enum',
        enum: EstadosProyecto,
        default: EstadosProyecto.PROPUESTA
    })
    estado!: EstadosProyecto;


    @ManyToMany(() => Usuario ,(usuario)=> usuario.proyecto)
    usuario!:Usuario[]

    @OneToMany(() => Compromiso, (compromiso) => compromiso.proyecto)
    @JoinColumn()
    compromiso!:Compromiso[]

}

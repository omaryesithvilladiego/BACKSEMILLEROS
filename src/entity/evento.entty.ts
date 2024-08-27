import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import { EventoUsuario } from './eventoUsuario.entity';
export enum EventoTipo {
    PRECENSIAL = 'Presencial',
    VIRTUAL = 'Virtual'
}
@Entity('eventos')
export class Evento {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255 })
    nombre!: string;

    @Column({
        type: 'enum',
        enum: EventoTipo,
        default: EventoTipo.PRECENSIAL
    })
    tipo!: EventoTipo;

    @Column({ type: 'date' })
    fecha!: string;

    @Column({ type: 'text' })
    descripcion!: string;

    @OneToMany(() => EventoUsuario, (eventousuario) => eventousuario.evento)
    @JoinColumn()
    evento_usuario!:EventoUsuario

    // Relaciones se agregarán más adelante
}

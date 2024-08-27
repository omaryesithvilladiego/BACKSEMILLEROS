import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from './usuario.entity';
import { Evento } from './evento.entty';

@Entity('eventos_usuarios')
export class EventoUsuario {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Usuario, (usuario) => usuario.evento_usuario)
    usuario!:Usuario

    @ManyToOne(() => Evento, (evento) => evento.evento_usuario)
    evento!:Evento

    @Column({ type: 'boolean' })
    asistio!: boolean;

    // Relaciones se agregarán más adelante
}

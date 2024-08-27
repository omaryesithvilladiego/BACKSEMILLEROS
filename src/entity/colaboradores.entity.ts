import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from './usuario.entity';

enum EstadoSolicitud {
    PENDIENTE = 'Pendiente',
    RECHAZADA = 'Rechazada',
    ACEPTADA = 'Aceptada'
}



@Entity('solicitudes_colaboradores')
export class SolicitudColaborador {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: 'enum',
        enum: EstadoSolicitud,
        default: EstadoSolicitud.PENDIENTE
    })
    estado_solicitud!: EstadoSolicitud;

    @ManyToOne(() => Usuario, (usuario) => usuario.solicitudes_enviadas)
    @JoinColumn({name:'usuario_id'})   
    usuario!:Usuario

    
    @ManyToOne(() => Usuario, (usuario) => usuario.solicitudes_recibidas)
    @JoinColumn({name:'colaborador_id'})
    colaborador!:Usuario
    



    // Relaciones se agregarán más adelante
}

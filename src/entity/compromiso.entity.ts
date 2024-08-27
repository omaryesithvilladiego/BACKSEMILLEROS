import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany,  JoinColumn } from 'typeorm';
import { Proyecto } from './proyecto.entity';
import { Entrega } from './entrega.entity';
enum EstadoCompromiso {
    DESARROLLO = 'En Desarrollo',
    TERMINADO = 'Terminado'

}

enum CompromisoTipos {
    PONENCIA = 'Ponencia',
    ARTICULO = 'Articulo',
    PREMIO = 'Premio',
    POSTER = 'Poster',
    OTRO = 'Otro'
}

@Entity('compromisos')
export class Compromiso  {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'date' })
    fecha_entrega_estimada!: string;

    @Column({ type: 'varchar', length: 255 })
    tipo!: CompromisoTipos;

    @Column({
        type: 'enum',
        enum: EstadoCompromiso,
        default: EstadoCompromiso.DESARROLLO
    })
    estado!: EstadoCompromiso;


    @ManyToOne(() => Proyecto, (proyecto) => proyecto.compromiso)
    @JoinColumn({name:'proyecto_id'})
    proyecto!:Proyecto

    @OneToMany(() => Entrega, (entrega) => entrega.compromiso)
    entrega!:Entrega

    // Relaciones se agregarán más adelante
}

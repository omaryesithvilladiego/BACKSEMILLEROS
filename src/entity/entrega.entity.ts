import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, JoinColumn } from 'typeorm';
import { Compromiso } from './compromiso.entity';

@Entity('entregas')
export class Entrega {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255 })
    link_pdf_url_entrega!: string;

    @Column({ type: 'text' })
    descripcion!: string;

    @Column({ type: 'text' })
    cuerpo!: string;

    @Column({ type: 'date' }) //fecha de entrega en el sistema
    fecha_entrega!: string;


    @ManyToOne(() => Compromiso, (compromiso) => compromiso.entrega)
    @JoinColumn({name:'compromiso_id'})
    compromiso!:Compromiso

    // Relaciones se agregarán más adelante
}

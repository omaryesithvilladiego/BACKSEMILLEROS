import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('datos_semilleros')
export class DatosSemillero {
    @PrimaryColumn({ type: 'varchar', length: 255 })
    id!: string;

    @Column({ type: 'varchar', length: 255 })
    nombre!: string;

    @Column({ type: 'varchar', length: 50 })
    sigla!: string;

    @Column({ type: 'varchar', length: 255 })
    grupo_investigacion!: string;

    @Column({ type: 'date' })
    fecha_ingreso!: string;

    @Column({ type: 'date', nullable: true })
    fecha_retiro!: string;

    // Relaciones se agregarán más adelante
}

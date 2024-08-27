import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('datos_universidades')
export class DatosUniversidad {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255 })
    correo_institucional!: string;

    @Column({ type: 'varchar', length: 255 })
    carrera!: string;

    @Column({ type: 'varchar', length: 100 })
    codigo_universidad!: string;

    @Column({ type: 'varchar', length: 255 })
    campus!: string;

    
}

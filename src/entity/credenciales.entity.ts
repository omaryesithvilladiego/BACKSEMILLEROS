import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('credenciales') // Nombre de la tabla en la base de datos
export class Credenciales {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255 })
    usuario!: string;

    @Column({ type: 'varchar', length: 255 })
    password!: string;
}

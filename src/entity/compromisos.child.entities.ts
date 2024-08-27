import { ChildEntity, Column, Entity } from 'typeorm';
import { Compromiso } from './compromiso.entity';
import { Entrega } from './entrega.entity';

@Entity('articulos')
export class Articulo extends Entrega {
    @Column({ type: 'varchar', length: 255 })
    doi!: string;

    @Column({ type: 'text' })
    resumen!: string;

    @Column({type:'text'})
    fecha_publicacion!:string

    @Column({type:'text'})
    revista!:string
}

@Entity('ponencias')
export class Ponencia extends Entrega {
    @Column({ type: 'varchar', length: 255 })
    modalidad!: string;


    @Column({ type: 'varchar', length: 255 })
    congreso!: string;

    @Column({ type: 'varchar', length: 255 })
    foto_url!: string;

    @Column({ type: 'varchar', length: 255 })
    ciudad!: string;

    @Column({ type: 'varchar', length: 255 })
    pais!: string;
}


@Entity('premios')
export class Premios extends Entrega {
    @Column({ type: 'varchar', length: 255 })
    fecha_premio!: string;

    @Column({ type: 'varchar', length: 255 })
    entidad!: string;
}
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('links_acceso_directo')
export class LinksAccesoDirecto {
    @PrimaryColumn({ type: 'varchar', length: 255 })
    id!: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    link_orcid!: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    link_cvlac!: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    link_google_academic!: string;

    // Relaciones se agregarán más adelante
}

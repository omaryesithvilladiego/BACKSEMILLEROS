import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { DatosContacto } from './datosContacto.entity';
import { DatosSemillero } from './datosSemillero.entity';
import { LinksAccesoDirecto } from './linksAcceso.entity';
import { Credenciales } from './credenciales.entity';
import { DatosUniversidad } from './datosUniversidad.entity';
import { Formacion } from './formacion.entity';
import { Proyecto } from './proyecto.entity';
import { EventoUsuario } from './eventoUsuario.entity';
import { SolicitudColaborador } from './colaboradores.entity';

export enum RolUsuario {
    ESTUDIANTE = 'Estudiante',
    INVESTIGADOR = 'Investigador',
    LIDER = 'LIDER'
}



@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255 })
    nombre!: string;

    @Column({ type: 'varchar', length: 255 })
    apellido!: string;

    @Column({ type: 'date' })
    fecha_nacimiento!: string;

    @Column({ type: 'int' })
    dni!: number;

    @Column({
        type: 'enum',
        enum: RolUsuario,
        default: RolUsuario.INVESTIGADOR
    })
    rol!: RolUsuario;

    @Column({ type: 'varchar', length: 255 })
    url_foto_perfil!: string;


    @OneToOne(() => DatosContacto)
    @JoinColumn({name:'datos_contacto'})
    datos_contacto!: DatosContacto


    @OneToOne(() => DatosSemillero)
    @JoinColumn({name:'datos_semillero'})
    datos_semillero!:DatosSemillero

    @OneToOne(() => LinksAccesoDirecto)
    @JoinColumn({name:'links_acceso_directo'})
    links_acceso_directo!: LinksAccesoDirecto

    @OneToOne(() => Credenciales)
    @JoinColumn({name:'credenciales'})
    credenciales!: Credenciales

    @OneToOne(() => DatosUniversidad)
    @JoinColumn({name:'datos_universidad'})
    datos_universidad!:DatosUniversidad

    @OneToMany( () => Formacion, (formacion) => formacion.usuario)
    formacion!:Formacion[]

    @ManyToMany(() => Proyecto, (proyecto) => proyecto.usuario)
    @JoinTable({name:'usuarios_proyectos'})
    proyecto!:Proyecto[]

    @OneToMany(() => EventoUsuario, (eventousuario) => eventousuario.usuario)
    evento_usuario!:EventoUsuario[]

    @OneToMany(() => SolicitudColaborador, (solicitud) => solicitud.usuario)
    solicitudes_recibidas!: SolicitudColaborador[];

    @OneToMany(() => SolicitudColaborador, (solicitud) => solicitud.colaborador)
    solicitudes_enviadas!: SolicitudColaborador[];
   
}

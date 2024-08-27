import { DataSource } from "typeorm";
import { DATABASE, HOST, PASSWORD, PORTDATABASE, USERNAME } from "./config/envs";
import { Credenciales } from "./entity/credenciales.entity";
import { SolicitudColaborador } from "./entity/colaboradores.entity";
import { Compromiso } from "./entity/compromiso.entity";
import { Usuario } from "./entity/usuario.entity";
import { DatosContacto } from "./entity/datosContacto.entity";
import { DatosSemillero } from "./entity/datosSemillero.entity";
import { DatosUniversidad } from "./entity/datosUniversidad.entity";
import { LinksAccesoDirecto } from "./entity/linksAcceso.entity";
import { Formacion } from "./entity/formacion.entity";
import { Proyecto } from "./entity/proyecto.entity";
import { EventoUsuario } from "./entity/eventoUsuario.entity";
import { Evento } from "./entity/evento.entty";
import { Entrega } from "./entity/entrega.entity";
import { Articulo, Ponencia, Premios } from "./entity/compromisos.child.entities";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: HOST,            // Esto será 'localhost'
    port: Number(PORTDATABASE),  // Esto será 5432
    username: USERNAME,    // Esto será 'omar'
    password: PASSWORD,    // Esto será '0898'
    database: DATABASE,    // Esto será 'petsite'
    synchronize: true,
    dropSchema: false,
    logging: true,
    entities: [Usuario, DatosContacto, DatosSemillero, DatosUniversidad, Credenciales,LinksAccesoDirecto, Formacion, Proyecto, EventoUsuario, Evento, Compromiso, SolicitudColaborador, Entrega, Ponencia, Articulo, Premios],
    subscribers: [],
    migrations: [],
});

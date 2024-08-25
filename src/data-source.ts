import { DataSource } from "typeorm";
import { DATABASE, HOST, PASSWORD, PORTDATABASE, USERNAME } from "./config/envs";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: HOST,            // Esto será 'localhost'
    port: Number(PORTDATABASE),  // Esto será 5432
    username: USERNAME,    // Esto será 'omar'
    password: PASSWORD,    // Esto será '0898'
    database: DATABASE,    // Esto será 'petsite'
    synchronize: true,
    dropSchema: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const envs_1 = require("./config/envs");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: envs_1.HOST,
    port: Number(envs_1.PORTDATABASE),
    username: envs_1.USERNAME,
    password: envs_1.PASSWORD,
    database: envs_1.DATABASE,
    synchronize: true,
    dropSchema: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
});

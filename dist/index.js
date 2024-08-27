"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const data_source_1 = require("./data-source");
const envs_1 = require("./config/envs");
const server_1 = __importDefault(require("./server"));
data_source_1.AppDataSource.initialize().then(() => {
    console.log('Database connected');
    server_1.default.listen(envs_1.PORT, () => {
        console.log(`Server listening on http://localhost:${envs_1.PORT}`);
    });
}).catch((err) => console.log(err));

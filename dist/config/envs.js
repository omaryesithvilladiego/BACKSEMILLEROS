"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HOST = exports.DATABASE = exports.PASSWORD = exports.USERNAME = exports.PORTDATABASE = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.PORT = process.env.PORT;
exports.PORTDATABASE = process.env.PORTDATABASE;
exports.USERNAME = process.env.USERNAME;
exports.PASSWORD = process.env.PASSWORD;
exports.DATABASE = process.env.DATABASE;
exports.HOST = process.env.HOST;

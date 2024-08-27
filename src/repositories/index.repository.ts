import { AppDataSource } from "../data-source";
import { Usuario } from "../entity/usuario.entity";


export const usuarioRepository = AppDataSource.getRepository(Usuario)
import { Usuario } from "../entity/usuario.entity";
import { usuarioRepository } from "../repositories/index.repository";


export const obetenerUsuariosService = async ():Promise<Usuario[]> => {

    try {
        const users:Usuario[] = await usuarioRepository.find()
        return users
    } catch (error) {
        console.log(error);
        throw new Error('Hubo un error al obtener los usuarios')
    }

}

export const obtenerUsuarioPorIdService = async (idUsuario:number):Promise<Usuario> => {
    if(!idUsuario) {
        throw new Error('No llego el id')
    }
    try {
        const user: Usuario | null = await usuarioRepository.findOne({
            where: { id: idUsuario },
            relations: ['datos_contacto','datos_universidad', 'datos_semillero'],
        });
        if(user === null) {
            throw new Error()
        }
        return user
    } catch (error) {
        throw new Error('El usuario no se encuentra en la base de datos')
    }
}
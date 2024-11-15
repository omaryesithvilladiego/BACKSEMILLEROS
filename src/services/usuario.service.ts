import { AppDataSource } from "../data-source";
import IcreateUserDto from "../dtos/createUserDto";
import { DatosContacto } from "../entity/datosContacto.entity";
import { RolUsuario, Usuario } from "../entity/usuario.entity";
import { usuarioRepository } from "../repositories/index.repository";
import { createDatosContactoService } from "./datosContacto.service";
import {  uploadFileToFirebaseStorage } from "./firebase.service";


export const obetenerUsuariosService = async ():Promise<Usuario[]> => {

    try {
        const users:Usuario[] = await usuarioRepository.find({relations:['datos_contacto']})
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
            relations: ['datos_contacto'],
        });
        if(user === null) {
            throw new Error()
        }
        return user
    } catch (error) {
        throw new Error('El usuario no se encuentra en la base de datos')
    }
}



export const createUserService = async (createUserDto: IcreateUserDto) => {
    const { nombre, apellido, fecha_nacimiento, dni, rol, url_foto_perfil, celular, departamento, ciudad, pais, correo_institucional } = createUserDto;

    try {
        const userCreated = await AppDataSource.manager.transaction(async transactionalEntityManager => {
            // Verificar si el usuario ya existe
            const userFound: Usuario | null = await transactionalEntityManager.findOne(Usuario, {
                where: { dni, datos_contacto: { correo_institucional } }
            });

            const userFoundDni: Usuario | null = await transactionalEntityManager.findOne(Usuario, {
                where: { dni }
            });

            if (userFound || userFoundDni) {
                throw new Error('El usuario ya se encuentra registrado');
            }

            // Crear los datos de contacto
            const newDatosContacto: DatosContacto | null = await createDatosContactoService({ celular, departamento, ciudad, pais, correo_institucional }, transactionalEntityManager);

            if (!newDatosContacto) {
                throw new Error('No se pudieron obtener los datos de contacto');
            }

            // Crear el nuevo usuario
            const newUser = transactionalEntityManager.create(Usuario, {
                nombre,
                apellido,
                fecha_nacimiento,
                dni,
                rol: rol as RolUsuario,
                datos_contacto: newDatosContacto,
            });

            // Guardar el nuevo usuario y obtener su ID
            const userCreated: Usuario = await transactionalEntityManager.save(newUser);

            // Subir la imagen pasando el URL y el ID del usuario
            const imageUrl  = await uploadFileToFirebaseStorage(url_foto_perfil, String(userCreated.id) );
            if (!imageUrl) throw new Error('Hubo un error al obtener la imagen del servidor');
            console.log(imageUrl);
            
            // Actualizar el campo url_foto_perfil del usuario
            userCreated.url_foto_perfil = imageUrl

            const updatedUser: Usuario = await transactionalEntityManager.save(userCreated);

            return updatedUser;
        });

        return userCreated;
    } catch (error: any) {
        throw new Error('Error al crear el usuario: ' + error.message);
    }
};

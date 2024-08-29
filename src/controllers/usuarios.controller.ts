import { Request, Response } from "express";
import { Usuario } from "../entity/usuario.entity";
import { createUserService, obetenerUsuariosService, obtenerUsuarioPorIdService } from "../services/usuario.service";
import IcreateUserDto from "../dtos/createUserDto";


export const obtenerUsuariosController = async (req:Request, res:Response):Promise<void> => {


    
    try {
        const users = await obetenerUsuariosService()
        if(users) {
            res.status(200).json(users)
        }
    } catch (error:any) {
        res.status(404).json({message:error.message})
    }
}

export const obtenerUsuarioPorIdController = async (req:Request<{id:number},{},{}>, res:Response):Promise<void> => {
    const idUsuario:number = Number(req.params.id) 
    console.log(idUsuario);
    
    if(!idUsuario) {
        res.status(404).json({message:'No se pudo obtener el id del usuario'})
    }
    try {
        const user = await obtenerUsuarioPorIdService(idUsuario)
        if(!user) {
            res.status(404).json({message:'No se encontro el usuario especificado'})
        }
        res.status(200).json(user)
    } catch (error:any) {
        console.log(error);
        res.status(400).json(error.message)
    }
}   


export const crearUsuario = async (req:Request<{},{},IcreateUserDto>, res:Response):Promise<void> => {

    const {nombre,apellido,fecha_nacimiento, dni, rol,celular,departamento,ciudad,pais,correo_institucional,url_foto_perfil} = req.body
    try {
        const dataUser = await createUserService({nombre,apellido,fecha_nacimiento,url_foto_perfil, dni, rol,celular,departamento,ciudad,pais,correo_institucional})
        res.status(200).json(dataUser)
    } catch (error:any) {
        res.status(400).json(error.message)
    }
}
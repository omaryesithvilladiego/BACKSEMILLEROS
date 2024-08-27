import { Request, Response } from "express";
import { DatosContacto } from "../entity/datosContacto.entity";
import IcreateDatosContactoDto from "../dtos/createDatosContactoDto";
import { createDatosContactoService } from "../services/datosContacto.service";



export const createDatosContacto = async (req:Request<{},{},IcreateDatosContactoDto>, res:Response):Promise<void> => {

    const {celular, direccion, ciudad, pais, departamento} = req.body

    try {
        const newDataContacto = await createDatosContactoService({
            celular:celular,
            direccion:direccion,
            ciudad:ciudad,
            pais:pais,
            departamento:departamento
        })
        res.status(200).json(newDataContacto)
    } catch (error:any) {
        res.status(404).json({message:error.message})
    }
    

    
}
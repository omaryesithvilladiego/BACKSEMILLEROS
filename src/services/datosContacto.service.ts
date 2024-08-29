import { EntityManager } from "typeorm";
import { AppDataSource } from "../data-source";
import IcreateDatosContactoDto from "../dtos/createDatosContactoDto";
import { DatosContacto } from "../entity/datosContacto.entity";
import { DatosSemillero } from "../entity/datosSemillero.entity";

const datosContactoRepository = AppDataSource.getRepository(DatosContacto)

export const  createDatosContactoService = async (datosContacto: IcreateDatosContactoDto, transactionalEntityManager: EntityManager):Promise<DatosContacto> => {

    const {celular,pais,correo_institucional,ciudad,departamento} = datosContacto
    if(!datosContacto) {
        throw new Error('No se recibieron datos')
    }
    
    

    try {
        const datosContactoFound: DatosContacto | null = await transactionalEntityManager.findOne(DatosContacto,{where:{correo_institucional}})
        const newDatosContacto = datosContactoRepository.create({
            celular,
        pais,
         departamento,
         ciudad,
         correo_institucional
         })
        const newData = await transactionalEntityManager.save(newDatosContacto)
        return newData
    } catch (error) {
        throw new Error('No se pudo guardar los datos de contacto del usuario')
    }



}
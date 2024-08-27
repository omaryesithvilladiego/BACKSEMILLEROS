import { AppDataSource } from "../data-source";
import IcreateDatosContactoDto from "../dtos/createDatosContactoDto";
import { DatosContacto } from "../entity/datosContacto.entity";

const datosContactoRepository = AppDataSource.getRepository(DatosContacto)

export const  createDatosContactoService = async (datosContacto: IcreateDatosContactoDto):Promise<DatosContacto> => {

    if(!datosContacto) {
        throw new Error('No se recibieron datos')
    }
    const newDatosContacto = new DatosContacto()
    newDatosContacto.celular = datosContacto.celular
    newDatosContacto.direccion = datosContacto.direccion
    newDatosContacto.pais = datosContacto.pais
    newDatosContacto.departamento = datosContacto.departamento
    newDatosContacto.ciudad = datosContacto.ciudad

    try {
        const newData = await datosContactoRepository.save(newDatosContacto)
        return newData
    } catch (error) {
        throw new Error('No se pudo guardar los datos de contacto del usuario')
    }



}
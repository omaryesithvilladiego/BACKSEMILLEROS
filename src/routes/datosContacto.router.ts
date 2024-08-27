import { Router } from 'express'
import { createDatosContacto } from '../controllers/datosContacto.controller'
const datosContactoRouter:Router = Router()


datosContactoRouter.post('/contact-data/create', createDatosContacto)


export default datosContactoRouter
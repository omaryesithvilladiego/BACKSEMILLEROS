import { Router } from 'express'
import { obtenerUsuarioPorIdController, obtenerUsuariosController } from '../controllers/usuarios.controller'
const usuarioRouter:Router = Router()


usuarioRouter.get('/users/get', obtenerUsuariosController)
usuarioRouter.get('/users/get-user/:id', obtenerUsuarioPorIdController)
usuarioRouter.post('/users/create')


export default usuarioRouter
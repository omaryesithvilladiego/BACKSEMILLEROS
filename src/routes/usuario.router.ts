import { Router } from 'express'
import { crearUsuario, obtenerUsuarioPorIdController, obtenerUsuariosController } from '../controllers/usuarios.controller'
import { validateUserData } from '../middlewares/validateCreateUser'
const usuarioRouter:Router = Router()


usuarioRouter.get('/users/get', obtenerUsuariosController)
usuarioRouter.get('/users/get-user/:id', obtenerUsuarioPorIdController)
usuarioRouter.post('/users/create', validateUserData, crearUsuario)


export default usuarioRouter
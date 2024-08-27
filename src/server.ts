import express from 'express'
const server = express()
import cors from 'cors'
import morgan from 'morgan'
import datosContactoRouter from './routes/datosContacto.router'
import usuarioRouter from './routes/usuario.router'



server.use(cors())
server.use(morgan('dev'))
server.use(express.json())

server.use(usuarioRouter)
server.use(datosContactoRouter)

export default server
import express from 'express'
const server = express()
import cors from 'cors'
import morgan from 'morgan'



server.use(cors())
server.use(morgan('dev'))
server.use(express.json())


export default server
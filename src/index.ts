import "reflect-metadata"
import { AppDataSource } from "./data-source";
import {  PORT } from "./config/envs";
import server from "./server";
import './config/adminFiredabe'


  


AppDataSource.initialize()
    .then(async () => {
        console.log('Database connected');
    
       
        
        server.listen(PORT, () => {
            console.log(`Server listening on http://localhost:${PORT}`);
        });
        
    })
    .catch((err: any) => console.log(err));

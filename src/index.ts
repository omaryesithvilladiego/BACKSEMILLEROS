import "reflect-metadata"
import { AppDataSource } from "./data-source";
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME, PORT } from "./config/envs";
import server from "./server";
import { uploadImage } from "./services/cloudinary.service";
import './config/adminFiredabe'


  


AppDataSource.initialize()
    .then(async () => {
        console.log('Database connected');
    
       
        
        server.listen(PORT, () => {
            console.log(`Server listening on http://localhost:${PORT}`);
        });
        
    })
    .catch((err: any) => console.log(err));

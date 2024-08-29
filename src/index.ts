import "reflect-metadata"
import { AppDataSource } from "./data-source";
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME, PORT } from "./config/envs";
import server from "./server";
import { uploadImage } from "./services/cloudinary.service";
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    secure: true
});

  

AppDataSource.initialize().then( ()  => {
    console.log('Database connected')
    server.listen(PORT, () => {console.log(`Server listening on http://localhost:${PORT}`);
    // console.log(cloudinary.config());
    // const imageUrl = '/home/omar/Pictures/Screenshots/Screenshot from 2024-08-28 10-34-25.png'
    // try {
    //    const image = uploadImage(imageUrl)

    // } catch (error) {
    //     console.log(error);
        
    // }

})
}).catch((err:any) => console.log(err)
)


import { storage } from '../config/adminFiredabe';
import path from 'path';

export const uploadFileToFirebaseStorage = async (filePath: string, userId: string) => {
    const fileName = path.basename(filePath);
    const destination = `${userId}/${fileName}`;

    // Verificar si la carpeta del usuario ya existe
    const [files] = await storage.getFiles({ prefix: `${userId}/` });

    if (files.length === 0) {
        console.log(`Carpeta no encontrada para el usuario ${userId}. Creando nueva carpeta...`);
        // La carpeta se creará automáticamente cuando subas el archivo
    } else {
        console.log(`Carpeta encontrada para el usuario ${userId}. Guardando archivo...`);
    }

    // Subir el archivo al destino dentro de la carpeta del usuario
    await storage.upload(filePath, { destination });

    // Obtener una referencia al archivo subido
    const file = storage.file(destination);

    // Hacer que el archivo sea público
    await file.makePublic();

    // Obtener la URL pública del archivo
    const publicUrl = `https://storage.googleapis.com/${storage.name}/${file.name}`;

    // Retornar la URL pública (permanente)
    return publicUrl;
};

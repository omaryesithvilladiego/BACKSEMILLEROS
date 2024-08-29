const cloudinary = require('cloudinary').v2;


export const uploadImage = async (imagePath: string, dni: number): Promise<string> => {
  // Configuración de opciones para la carga
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
    public_id: `users/${dni}/profile-picture`, // Carpeta con el DNI y nombre de archivo
  };

  try {
    // Subida de la imagen
    const result = await cloudinary.uploader.upload(imagePath, options);
    console.log(result);
    return result.url;
  } catch (error:any) {
    throw new Error('Hubo un error al guardar la imagen: ' + error.message);
  }
};

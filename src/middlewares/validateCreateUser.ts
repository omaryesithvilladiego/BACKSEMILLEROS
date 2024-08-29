import { Request, Response, NextFunction } from 'express';
import { RolUsuario } from '../entity/usuario.entity';

export const validateUserData = (req: Request, res: Response, next: NextFunction) => {
    const {
        nombre,
        apellido,
        fecha_nacimiento,
        dni,
        rol,
        celular,
        departamento,
        ciudad,
        pais,
        correo_institucional,
        url_foto_perfil
    } = req.body;

    // Validar que todos los campos estén presentes
    if (!nombre || !apellido || !fecha_nacimiento || !dni || !rol || !celular || !departamento || !ciudad || !pais || !correo_institucional || !url_foto_perfil) {
        return res.status(400).json({ error: 'Todos los campos son requeridos.' });
    }

    // Validar nombre y apellido (letras, caracteres especiales y al menos 2 caracteres)
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{2,}$/;
    if (!nameRegex.test(nombre) || !nameRegex.test(apellido)) {
        return res.status(400).json({ error: 'Nombre y Apellido deben contener solo letras, caracteres especiales y al menos 2 caracteres.' });
    }

    // Validar fecha de nacimiento (formato YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(fecha_nacimiento)) {
        return res.status(400).json({ error: 'Fecha de nacimiento debe estar en formato YYYY-MM-DD.' });
    }

    // Validar DNI (solo números, longitud entre 7 y 10 caracteres)
    const dniRegex = /^\d{7,10}$/;
    if (!dniRegex.test(dni)) {
        return res.status(400).json({ error: 'DNI debe contener solo números y tener entre 7 y 10 dígitos.' });
    }

    // Validar rol (debe ser uno de los valores del enum RolUsuario)
    if (!Object.values(RolUsuario).includes(rol)) {
        return res.status(400).json({ error: `Rol debe ser uno de los siguientes valores: ${Object.values(RolUsuario).join(', ')}` });
    }

    // Validar celular (solo números, longitud de 10 caracteres)
    const celularRegex = /^\d{10}$/;
    if (!celularRegex.test(celular)) {
        return res.status(400).json({ error: 'Celular debe contener solo números y tener 10 dígitos.' });
    }

    // Validar departamento y ciudad (letras, caracteres especiales y al menos 2 caracteres)
    if (!nameRegex.test(departamento) || !nameRegex.test(ciudad)) {
        return res.status(400).json({ error: 'Departamento y Ciudad deben contener solo letras, caracteres especiales y al menos 2 caracteres.' });
    }

    // Validar país (letras, caracteres especiales y al menos 2 caracteres)
    if (!nameRegex.test(pais)) {
        return res.status(400).json({ error: 'País debe contener solo letras, caracteres especiales y al menos 2 caracteres.' });
    }

    // Validar correo institucional (formato de email válido)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(correo_institucional)) {
        return res.status(400).json({ error: 'Correo institucional no es válido.' });
    }

    // Validar URL de la foto de perfil (debe ser una ruta de archivo local)
    const localFileRegex = /^([a-zA-Z]:\\[^\0<>:"/\\|?*]+|\/[^\0<>:"/\\|?*]+)+(\.[a-zA-Z0-9]+)?$/;
    if (!localFileRegex.test(url_foto_perfil)) {
        return res.status(400).json({ error: 'La URL de la foto de perfil debe ser una ruta de archivo local válida.' });
    }

    // Si todas las validaciones pasan, continúa con el siguiente middleware
    next();
};

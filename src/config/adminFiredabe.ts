// src/config/adminFirebase.ts
import admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
import credentials from './firebase-admin-credentials.json';

// Asegurarte de que las credenciales tienen el tipo correcto
const serviceAccount = credentials as ServiceAccount;

// Inicializar la app de Firebase
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'gs://semillerosapp.appspot.com', // Configura el bucket si usarás Firebase Storage
});

// Verificar si la inicialización fue exitosa
if (!(admin.apps.length > 0)) throw new Error('Hubo un error al conectarse a admin') 
console.log('Firebase conectado correctamente');


// Exportar las instancias para usarlas en toda la aplicación
export const db = admin.firestore();  // Inicializar Firestore
export const auth = admin.auth();     // Inicializar Auth
export const storage = admin.storage().bucket(); // Inicializar Storage

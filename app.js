const express = require('express');
const mongoose = require('mongoose');

const PORT = 8000;


// Así creamos la aplicación express
const app = express();

// Analizar los archivos JSON 
app.use(express.json());

// Esto nos permite obtener la información de configuración de ".env"
require('dotenv').config();

// Obtenemos la cadena de conexión a la base de datos desde las variables de entorno (fichero .env)
const mongoUrl = process.env.DATABASE_URL_DEV;

// configuración con mongoDB
// useNewUrlParser: le indica a mongoose que utilice el nuevo analizador de url de la cadena de conexión (para evitar un error de deprecación)
mongoose.connect(mongoUrl, { useNewUrlParser: true })

// Guardar conexión con mongoose 
const db = mongoose.connection;

// Verificamos que la conexión se ha realizado correctamente, de lo contrario nos dice error 
db.on('error',()=>{
console.error('Error:', error)
});

// nos indica que se ha establecido la conexión correctamente
db.once('connected',()=>{
    console.log('Success connect ')
})


// nos indica que se ha desconectado la conexión correctamente
db.on('disconnected',()=>{
    console.log('Mongoose connection disconnected')
})

const users = require('./Controller/userController');
app.use('/users', users);

app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`);
});
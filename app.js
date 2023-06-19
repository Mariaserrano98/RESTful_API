// Cargamos modulo HTTP en el servidor
const http = require('http');       

// Declaramos el puerto donde lanzamos el servidor 
const PORT = 8000; 


const server = http.createServer(
// req contiene los detalles de la solicitud 
// res envia la respuesta al cliente    
    (req, res) =>{
        res.statusCode = 200;
         // Establecer el tipo de contenido que vamos a devolver
        res.setHeader("Content-Type","text/html");
        // Respuesta que devolvemos al cliente, en este caso tipo HTML 
        res.end("<h1>Hola Mundo</h1></br><h2>Curso </h2>");
    }
).listen(PORT, () => {
    // Imprimir el mensaje de confimación de que funciona correctamente
    console.log(`Server running at http://localhost:${PORT}/`);
})
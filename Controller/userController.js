const express = require('express');
const router = express.Router();


// Get, Obtener todos los usuarios
router.get('/', (req, res) => {
    res.send('Get, Obtener todos los usuarios');
});

// Get, Obtener un unico usuario por id

router.get('/:id', (req, res) => {
    res.send(`Get, Obtener un usuario por id ${req.params.id}`);
});

// crear un usuario 
router.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Post, Crear un usuario ${req.body.name}`);    
});


// Borrar un usuario
router.delete('/:id', (req, res) => {
    res.send(`Delete, Borrar un usuario ${req.params.id}`);
});

// Actualizar un usuario
router.patch('/:id', (req, res) => {
    res.send(`Patch, Actualizar un usuario ${req.params.id}`);
});
module.exports = router;
//Requerimos express y lo guardamos en una variable
const express = require('express');

//Utilizamos el Método Router y lo guardamos en una variable
const router = express.Router();

//Manejamos las peticiones y las respuestas 
//de la Página principal con una función arrow
router.get('/', (req, res) => {
    res.send('Index');
});

module.exports = router; 
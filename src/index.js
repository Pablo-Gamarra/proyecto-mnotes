const express = require('express');
const path = require('path');
const expresshbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');


//INITIALIZATIONS
// Inicialización de la app
const app = express(); 

//--------------------------------------------------------------------------------
//SETTINGS
// Configuración del puerto 3000 o puerto predeterminado en la PC
app.set('port', process.env.PORT || 3000); 

// Configuración de ruta carpeta "views"
app.set('views', path.join(__dirname, 'views'));

// Configuración de "handelbars (html)"
app.engine('.hbs', expresshbs({
    defaultLayout: 'main',

    // Configuración de ruta carpeta "layouts"
    layoutsDir: path.join(app.get('views'), 'layouts'),

    // Configuración de ruta carpeta "partials"
    partialsDir: path.join(app.get('views'), 'partials'),
    
    // Configuración de la extensión ".hbs (Handlebars)"
    extname: '.hbs',
}))

// Configuración del motor de plantillas)
app.set('view engine', '.hbs');

//--------------------------------------------------------------------------------
//MIDDLEWARES
//Método "urlencoded" de "express" para interpretar y recibir datos  ej email y contraseña de usuario
app.use(express.urlencoded({extended: false}));

//Método "overrride" otros métodos(=/=GET, POST) para enviar datos desde el formulario
app.use(methodOverride('_method')); 

//Creamos objeto "session" con propiedades configuradas por defecto
//Sirve para autenticar y almacenar temporalmente al usuario
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true,
}));

//--------------------------------------------------------------------------------
//GLOBAL VARIABLES


//--------------------------------------------------------------------------------
//ROUTES
// Requerimos los archivos.js dentro de la carpeta routes para crear las rutas al servidor
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));


//--------------------------------------------------------------------------------
//STATIC FILES


//--------------------------------------------------------------------------------
//SERVER IS LISTENING
// Puerto escuchando
app.listen(app.get('port'), ()=> {
    console.log('Server on port', app.get('port'))
}); 
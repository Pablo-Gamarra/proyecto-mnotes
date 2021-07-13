const express = require('express');
const path = require('path');
const expresshbs = require('express-handlebars');


//INITIALIZATIONS
// Inicialización de la app
const app = express(); 

//--------------------------------------------------------------------------------
//SETTINGS
// Configuración del puerto 3000 o puerto predeterminado en la PC
app.set('port', process.env.PORT || 3000); 

// Configuración de ruta Carpeta "views"
app.set('views', path.join(__dirname, 'views'));

// Configuración de handelbars (html)
app.engine('.hbs', expresshbs({
    defaultLayout: main.hbs,

    // Configuración de ruta Carpeta "layouts"
    layoutsDir: path.join(app.get('views'), 'layouts'),

    // Configuración de ruta Carpeta "partials"
    partialsDir: path.join(app.get('views'), 'partials'),
    
    // Configuración de la Extensión ".hbs (Handlebars)"
    extname: '.hbs',
}))

// Configuración del motor de plantillas)
app.set('view engine', '.hbs');
//--------------------------------------------------------------------------------
//MIDDLEWARES


//--------------------------------------------------------------------------------
//GLOBAL VARIABLES


//--------------------------------------------------------------------------------
//ROUTES


//--------------------------------------------------------------------------------
//STATIC FILES


//--------------------------------------------------------------------------------
//SERVER IS LISTENING
// Puerto escuchando
app.listen(app.get('port'), ()=> {
    console.log('Server on port', app.get('port'))
}); 
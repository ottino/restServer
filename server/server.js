require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

// Configuracion para mongodbAtlas
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const app = express();

const bodyParser = require('body-parser');
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );


// Configuracion global de rutas
app.use( require('./routes/index') );


mongoose.connect(process.env.URLDB,
    {useNewUrlParser: true, useUnifiedTopology: true});


app.listen(process.env.PORT,
    () => console.log('Escuchando puerto', process.env.PORT ) );
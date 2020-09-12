require('./config/config');


const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );


app.get('/usuario', function (req,res) {

    res.json('get usuario');

});

app.post('/usuario', function (req,res) {

    let body = req.body; // pasa por el bodyParser

    if ( body.nombre === undefined ) {

        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {

        res.json({
            persona: body
        });

    }


});

app.put('/usuario/:id', function (req,res) {

    let id = req.params.id;

    res.json({
        id
    });

});

app.delete('/usuario', function (req,res) {

    res.json('delete usuario');

});

// puerto 27017 puerto de mongo
mongoose.connect('mongodb://localhost:27017/cafe', (err , res)=>{

    if ( err ) throw new err;

    console.log('Base de datos [ONLINE]');


});

app.listen(process.env.PORT, 
    () => console.log('Escuchando puerto', process.env.PORT ) );
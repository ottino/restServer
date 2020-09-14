
const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');


let rolesValidos = {
    values: ['ADMIN_ROLE' , 'USER_ROLE'],
    message: '{VALUE} no es un rol valido'
}


let Schemma = mongoose.Schema;

let usuarioSchema = new Schemma({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    email: {
        type: String,
        unique:true,
        required: [true, 'El correo es obligatorio']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});


// toJSON siempre lo llama al momento de imprimir
usuarioSchema.methods.toJSON = function() {

    let user = this;
    let userObject = user.toObject();

    delete userObject.password;

    return userObject;

}

// usuarioSchema.plugin( uniqueValidator,
//                      {message: '{PATH} debe ser unico'} );

module.exports = mongoose.model( 'Usuario', usuarioSchema );


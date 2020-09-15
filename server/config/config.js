
// ================================
// Puerto
// ================================
process.env.PORT = process.env.PORT || 3000;

// ================================
// Entorno
// ================================
// la establece Heroku
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ================================
// Vencimiento del Token
// ================================
//  60 segundos
//  60 minutos
//  24 horas
//  30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ================================
// SEED de autenticacion (semilla)
// ================================
process.env.SEED = process.env.SEED || 'SEMILLA';



// ================================
// Base de datos
// ================================
let urlDB;

if ( process.env.NODE_ENV === 'dev' ) {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://maxi:maxi@cluster0-shard-00-01.fwzjl.mongodb.net/testmlab';
}

process.env.URLDB = urlDB;
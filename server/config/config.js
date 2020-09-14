
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
// Base de datos
// ================================
let urlDB;

if ( process.env.NODE_ENV === 'dev' ) {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://maxi:maxi@cluster0-shard-00-01.fwzjl.mongodb.net/testmlab';
}

urlDB = 'mongodb+srv://maxi:maxi@cluster0-shard-00-01.fwzjl.mongodb.net/admin';
urlDB = 'mongodb+srv://maxi:maxi@cluster0.fwzjl.mongodb.net/test?retryWrites=true&w=majority';

process.env.URLDB = urlDB;
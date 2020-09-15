const jwt = require('jsonwebtoken');


// ===========================
// Verificar Token
// ===========================
let verificaToken = ( req, res, next ) => {

    let body    = req['body'];
    let token   = body['token'];

    // console.log( req );

    jwt.verify( token , process.env.SEED , (err, decoded) => {

        if ( err ) {

            return res.status(401).json({
                ok:false,
                err: {
                    message: 'Token no válido'
                }
            });

        }

        req.usuario = decoded.usuario;
        next();

    });

    // res.json({
    //     token: token
    // });

};

module.exports = {

    verificaToken

};
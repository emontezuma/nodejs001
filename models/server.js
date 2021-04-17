const express = require('express'); 
var cors = require('cors')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioRuta = '/api/usuarios';

        //Middlewares
        this.middlewares();
        //Rutas
        this.routes();
    }

    middlewares() {
        //DIrectorio público
        this.app.use( express.static('public'));
        //CORS
        this.app.use( cors() );
        //Parseo y lectura
        this.app.use( express.json());
    }

    routes () {
        this.app.use(this.usuarioRuta, require('../routes/user'));
    }

    listen () {
        this.app.listen(this.port, () => {
            console.log(`Aplicación corriendo en el puerto ${this.port}`)
        })
    }
}

module.exports = Server;
const express = require('express')
const cors = require('cors')
require('dotenv').config();

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'

        // Middlewares
        this.middlewares();

        // Rutas
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use( (cors()) )

        // Parseo y lectura de body
        this.app.use(express.json());

        // Directorio público
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en port", this.port)
        });
    }
}

module.exports = Server;
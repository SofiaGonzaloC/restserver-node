const express = require('express')
require('dotenv').config();

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT

        // Middlewares
        this.middlewares();

        // Rutas
        this.routes();
    }

    middlewares() {
        // Directorio público
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.get('/api', (req, res) => {
            res.send('Hello world')
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en port", this.port)
        });
    }
}

module.exports = Server;
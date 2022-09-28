const { Router } = require('express')

const {
    getUsuarios,
    putUsuarios,
    postUsuarios,
    deleteUsuarios,
    patchUsuarios
} = require('../controllers/usuarios.controller')

const router = Router();

router.get('/', getUsuarios);

router.put('/:id', putUsuarios );

router.post('/', postUsuarios);

router.delete('/', deleteUsuarios);

router.patch('/', patchUsuarios);

module.exports= router;
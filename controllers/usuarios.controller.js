const { response } = require('express');

const getUsuarios = (req, res = response) => {
    res.json({
        msg: 'get API - controlador'
    })
}

const putUsuarios = (req, res = response) => {
    res.json({
        msg: 'put API - controlador'
    })
}

const postUsuarios = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    })
}

const deleteUsuarios = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    })
}

const patchUsuarios = (req, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    })
}

module.exports = {
    getUsuarios,
    putUsuarios,
    postUsuarios,
    deleteUsuarios,
    patchUsuarios
}
const { response } = require('express');

const getUsuarios = (req = request, res = response) => {

    const {q, nombre = 'No name', apikey, page, limit} = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    })
}

const putUsuarios = (req, res = response) => {

    // params (url) + id (nombre del param)
    const id = req.params.id

    res.json({
        msg: 'put API - controlador',
        id
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
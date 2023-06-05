const { response } = require('express')

const usuariosGet = (req, res) => {

    const { q, nombre, apiKey, page = 1, limit } = req.query;

    res.json({
        msg: 'get api - controlador',
        q,
        nombre,
        page,
        apiKey,
        limit
    })
}
const ususariosPost = (req, res) => {

    const { nombre, edad, apiKey } = req.body;

    res.json({
        msg: 'post api - controlador',
        nombre,
        edad,
        apiKey
    })
}
const usuariosPut = (req, res = response) => {

    const { id } = req.params;
    res.status(500).json({
        msg: 'put api - controlador',
        id
    })
}

const ususariosDelete = (req, res) => {
    res.json({
        msg: 'delete api - controlador'
    })
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch api - controlador'
    })
}

module.exports = {
    usuariosGet,
    ususariosPost,
    usuariosPut,
    ususariosDelete,
    usuariosPatch
}

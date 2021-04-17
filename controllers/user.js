const { response, request } = require('express');

const usuariosGet =  (req = request, res = response) => {
    const { nombre, apellido = 'No se' } = req.query;
    res.json({
        msg: 'GET API controlador',
        nombre,
        apellido
    })
}

const usuariosPost =  (req, res = response) => {
    const { nombre } = req.body;
    res.json({
        msg: 'POST API controlador',
        nombre
    })
}

const usuariosPut =  (req, res = response) => {
    const id = req.params.id;
    res.json({
        msg: 'PUT API controlador',
        id
    })
}

const usuariosDelete =  (req, res = response) => {
    res.json({
        msg: 'DELETE API controlador'
    })
}

module.exports = {
    usuariosGet, 
    usuariosPut,
    usuariosPost,
    usuariosDelete
}

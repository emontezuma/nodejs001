const { Router } = require('express');

const usuarios = require('../controllers/user');

const router = Router();

router.get('/', usuarios.usuariosGet );

router.post('/', usuarios.usuariosPost );

router.put('/:id', usuarios.usuariosPut );

router.delete('/', usuarios.usuariosDelete );

module.exports = router;
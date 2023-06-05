
const { Router } = require('express')
const {
    usuariosPut,
    usuariosGet,
    ususariosPost,
    usuariosPatch,
    ususariosDelete
} = require('../controllers/user')

const router = Router();

router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/', ususariosPost);

router.delete('/', ususariosDelete);

router.patch('/', usuariosPatch);

module.exports = router
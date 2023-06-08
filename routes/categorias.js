
const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos, validarJWT } = require('../middlewares');
const { crearCategoria, obtenerCategorias, actualizarCategoria, obtenerCategoria } = require('../controllers/categorias');
const { existeCategoriaPorId } = require('../helpers/db-validators');


const router = Router();

//  Obtener todas las categorias - publico
router.get('/', obtenerCategorias);

// Obtener una categoria por id - publico
router.get('/:id',[
    check('id').custom( existeCategoriaPorId),
    validarCampos
]
, obtenerCategoria);

// Crear categoria - privado - cualquier persona con un token válido
router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], crearCategoria);

router.put('/:id',[
    validarJWT,
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    validarCampos
], actualizarCategoria );

router.delete('/:id', (req, res) => {
    return res.json({
        msg: 'delete'
    })
});

module.exports = router;
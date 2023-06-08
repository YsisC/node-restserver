
const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos  } = require('../middlewares');


const router = Router();

//  Obtener todas las categorias - publico
router.get('/', (req , res) =>{
    return res.json({
        msg: 'categoria'
    })
});

// Obtener una categoria por id - publico
router.get('/:id', (req , res) =>{
    return res.json({
        msg: 'categoria id'
    })
});

// Crear categoria - privado - cualquier persona con un token válido
router.post('/', (req , res) =>{
    return res.json({
        msg: 'post'
    })
});

router.put('/:id', (req , res) =>{
    return res.json({
        msg: 'put'
    })
});
router.delete('/:id', (req , res) =>{
    return res.json({
        msg: 'delete'
    })
});

module.exports = router;
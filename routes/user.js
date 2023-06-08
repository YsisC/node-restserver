
const { Router } = require('express');
const { check } = require('express-validator');

const {
    usuariosPut,
    usuariosGet,
    ususariosPost,
    usuariosPatch,
    ususariosDelete
} = require('../controllers/user');

const { validarCampos, tieneRole, validarJWT , esAdminRole} = require('../middlewares');


const { isRoleValid, emailExiste, existeUsuarioId } = require('../helpers/db-validators');

const router = Router();

router.get('/', usuariosGet);

router.put('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioId),
    check('rol').custom(isRoleValid),
    validarCampos,
], usuariosPut);

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser mas de 6 letras').isLength({ min: 6 }),
    check('correo', 'El correo no es valido').isEmail(),
    check('correo').custom(emailExiste),
    // check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom(isRoleValid),
    validarCampos,
], ususariosPost);

router.delete('/:id',[
    validarJWT,
    // esAdminRole,
    tieneRole('ADMIN_ROLE', 'USER_ROLE'),
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioId),
    validarCampos
], ususariosDelete);

router.patch('/', usuariosPatch);

module.exports = router;
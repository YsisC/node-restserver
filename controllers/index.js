const auth = require('../controllers/auth');
const buscar = require('../controllers/buscar');
const uploads = require('../controllers/uploads');
const categorias = require('../controllers/categorias');


module.exports = {
    ...auth,
    ...buscar,
    ...uploads,
    ...categorias
}
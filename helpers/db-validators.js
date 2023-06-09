const { Categoria, Producto } = require('../models');
const Role = require('../models/role');
const Usuario = require('../models/usuario');

const isRoleValid = async (rol = '') => {

    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no esta registrado en la BD`)
    }
}
const emailExiste = async (correo = '') => {

    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El correo: ${correo}, ya está registrado`);
    }
}

const existeUsuarioId = async (id = '') => {
    const existeUser = await Usuario.findById(id);
    if (!existeUser) {
        throw new Error(`El id: ${id}, no existe`);
    }

}
const existeCategoriaPorId = async (id = '') => {
    const existeCateg = await Categoria.findById(id);
    if (!existeCateg) {
        throw new Error(`El id: ${id}, no existe`);
    }

}
const existeProductoPorId = async (id = '') => {
    const existeProd = await Producto.findById(id);
    if (!existeProd) {
        throw new Error(`El id: ${id}, no existe`);
    }

}

const coleccionesPermitidas = ( coleccion = '', colecciones = [])  =>{

    const incluida = colecciones.includes( coleccion );

    if ( !incluida ) {
        throw new Error(`La colección ${ coleccion } no es permitida, ${ colecciones }`);
    }
    return true;
}

module.exports = {
    isRoleValid,
    emailExiste,
    existeUsuarioId,
    existeCategoriaPorId,
    existeProductoPorId,
    coleccionesPermitidas

}

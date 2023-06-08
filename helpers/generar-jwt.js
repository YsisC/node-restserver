const jwt = require('jsonwebtoken')

const generarJWT = (uid = '') => {

    return new Promise((resolve, reject) => {

        const payload = { uid };

        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '4h'
        }, (er, token) => {
            if (er) {
                console.log(er)
                reject('No se pudo genera el JWT')
            } else {
                resolve(token)
            }

        })

    })
}

module.exports = {
    generarJWT
}
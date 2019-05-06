'use strict';

const JWT = require('jsonwebtoken');
const Bcrypt = require('bcrypt');

module.exports = function (server, options) {

    const jwtEncrypt = {
        name: 'jwtEncrypt',
        method: (payload) => JWT.sign(payload, process.env.JWT_SECRET)
    };

    const jwtVerify = {
        name: 'jwtVerify',
        method: (payload) => JWT.verify(payload, process.env.JWT_SECRET)
    };

    const hash = {
        name: 'hash',
        method: (pwd) => Bcrypt.hashSync(pwd, 10)
    };

    const compare = {
        name: 'compare',
        method: async (pwd, pwdHash) => await Bcrypt.compare(pwd, pwdHash)
    };

    return [
        jwtEncrypt,
        jwtVerify,
        hash,
        compare
    ];
}
;

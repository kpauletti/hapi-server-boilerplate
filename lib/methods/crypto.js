'use strict';

const JWT = require('jsonwebtoken');

module.exports = function (server, options) {

    const jwtEncrypt = {
        name: 'jwtEncrypt',
        method: (payload) => JWT.sign(payload, process.env.JWT_SECRET)
    };

    const jwtVerify = {
        name: 'jwtVerify',
        method: (payload) => JWT.verify(payload, process.env.JWT_SECRET)
    };

    return [
        jwtEncrypt,
        jwtVerify
    ];
}
;

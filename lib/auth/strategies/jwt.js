'use strict';

module.exports = (server, options) => ({
    scheme: 'jwt',
    options: {
        key: options.jwtKey,
        urlKey: false,
        cookieKey: false,
        tokenType: 'Token',
        verifyOptions: { algorithms: ['HS256'] },
        validate: (decoded, request) => {

            return {
                isValid: true
            };
        }
    }
});


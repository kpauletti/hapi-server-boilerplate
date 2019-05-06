'use strict';

module.exports = (server, options) => ({
    scheme: 'jwt',
    options: {
        key: options.jwtKey,
        urlKey: false,
        cookieKey: false,
        verifyOptions: { algorithms: ['HS256'] },
        validate: async (decoded, request) => {

            const { User } = server.models();
            const user = await User.query().findById(decoded.id);

            const isValid = user ? true : false;

            return { isValid };
        }
    }
});


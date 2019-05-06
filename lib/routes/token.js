'use strict';

module.exports = {

    method: 'GET',
    path: '/token',
    handler: (request, h) => {

        const token = request.server.methods.jwtEncrypt({ test: 'blah' });
        console.log('TOKEN \t', token);
        const verify = request.server.methods.jwtVerify(token);
        console.log('VERIFY \t', verify);
        return {
            token,
            verify
        };
    },
    options: {
    //    tags: [],
    //    description: "",
        auth: false
    //    validate: {
        //    payload: { },
        //    params: { }
        // }
    }

}
;

'use strict';

module.exports = {

    method: 'GET',
    path: '/token',
    handler: (request, h) => {

        return request.server.methods.jwtEncrypt({ id: 1 });

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

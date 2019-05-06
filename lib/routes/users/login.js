'use strict';

const Joi = require('@hapi/joi');

const _payload = Joi.object().keys({
    email: Joi.string(),
    password: Joi.string()
});

module.exports = {

    method: 'POST',
    path: '/login',
    handler: async (request, h) => {

        const { userService } = request.services();

        return await userService.login(request.payload);

    },
    options: {
        validate: {
            payload: _payload
        },
        auth: false
    //    tags: [],
    //    description: "",
    }

}
;

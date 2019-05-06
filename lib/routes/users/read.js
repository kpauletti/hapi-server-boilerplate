'use strict';

const Joi = require('@hapi/joi');

module.exports = {
    method: 'GET',
    path: '/user/{id?}',
    handler: async (request, h) => {

        const { id } = request.params;

        const { User } = request.models();
        return await User.query().findById(id);
    },
    options: {
        validate: {
            params: {
                id: Joi.number().required()
            }
        },
        auth: false
        //    tags: [],
        //    description: "",
        //    auth: false
    }
};

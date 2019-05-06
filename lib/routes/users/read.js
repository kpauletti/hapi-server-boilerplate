'use strict';

const Joi = require('@hapi/joi');

module.exports = {
    method: 'GET',
    path: '/user/{id?}',
    handler: async (request, h) => {

        const { id } = request.params;
        const { User } = request.models();

        const query = id ? User.query().findById(id) : User.query();
        return await query;
    },
    options: {
        validate: {
            params: {
                id: Joi.number()
            }
        }
        // auth: false
        //    tags: [],
        //    description: "",
        //    auth: false
    }
};

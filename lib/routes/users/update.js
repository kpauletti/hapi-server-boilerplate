'use strict';

const Joi = require('@hapi/joi');

module.exports = {
    method: 'PUT',
    path: '/user/{id}',
    handler: ({ params: { id } }, h) => {

        return null;
    },
    options: {
        validate: {
            params: {
                id: Joi.number().required()
            }
        },
        //    tags: [],
        description: 'Create a user'
        //    auth: false
    }
};

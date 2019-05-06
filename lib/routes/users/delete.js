'use strict';

const Joi = require('@hapi/joi');

module.exports = {
    method: 'DELETE',
    path: '/user/{id}',
    handler: ({ params: { id } }, h) => {
        // *ID* is destructured from the request object, follow up with business logic
        return null;
    },
    options: {
        validate: {
            params: {
                id: Joi.number().required()
            }
        }
        //    tags: [],
        //    description: "",
        //    auth: false,
    }
};

'use strict';

const Joi = require('@hapi/joi');

const _payload = Joi.object().keys({
    email: Joi.string(),
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
});

module.exports = {
    method: 'POST',
    path: '/user',
    handler: (request, h) => {

        const { User } = request.models();
        return User.query().insert(request.payload);
    },
    options: {
        validate: {
            payload: _payload
        },
        auth: false
        //    tags: [],
        //    description: "",
        //    auth: false
    }
};

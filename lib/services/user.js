'use strict';

const Schmervice = require('schmervice');
const Boom = require('@hapi/boom');

module.exports = class UserService extends Schmervice.Service {

    constructor(...args){

        super(...args);
    }


    async signup({ password, ...userInfo }) {

        const { User } = this.server.models();
        const { hash } = this.server.methods;

        const hashedPwd = hash(password);

        try {
            await User.query().insert({ ...userInfo, password: hashedPwd });
            return { message: 'User created successfully' };
        }
        catch (e) {

            console.log(e);
            return Boom.badImplementation('Something went wrong');
        }


    }

    async login({ email, password }) {

        const { User } = this.server.models();
        const { compare, jwtEncrypt } = this.server.methods;

        const user = await User.query().findOne({ email });

        if (!user) {
            return Boom.notFound('User / Password combination does not exist');
        }

        const check = await compare(password, user.password);

        if (!check) {
            return Boom.notFound('User / Password combination does not exist');
        }

        return { token: jwtEncrypt({ id: user.id }) };

    }

};

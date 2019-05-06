'use strict';

const Schmervice = require('schmervice');

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
            return { message: 'Something went wrong.' };
        }


    }

    async login({ email, password }) {

        const { User } = this.server.models();
        const { compare, jwtEncrypt } = this.server.methods;

        const user = await User.query().findOne({ email });

        if (!user) {
            return { message: 'User does not exist' };
        }

        const check = await compare(password, user.password);

        if (!check) {
            return { message: 'Password is incorrect' };
        }

        return { token: jwtEncrypt({ id: user.id }) };

    }

};

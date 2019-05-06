'use strict';

const  Schwifty = require('schwifty');

class User extends Schwifty.Model {

    static get tableName() {

        return 'users';
    }
}

module.exports = User;

'use strict';

exports.up = function (knex, Promise) {

    return Promise.all([
        knex.schema.createTable('users', (table) => {

            table.increments('id').primary();

            table.string('username').notNullable();
            table.string('email').notNullable();
            table.string('password').notNullable();

        })
    ]);
};

exports.down = function (knex, Promise) {

    return Promise.all([knex.schema.dropTable('users')]);
};

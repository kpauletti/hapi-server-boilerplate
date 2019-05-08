'use strict';

const Confidence = require('confidence');
const Toys = require('toys');
const Path = require('path');

// Glue manifest as a confidence store
module.exports = new Confidence.Store({
    server: {
        host: 'localhost',
        port: {
            $filter: { $env: 'NODE_ENV' },
            $default: {
                $env: 'PORT',
                $coerce: 'number',
                $default: 3000
            },
            test: { $value: undefined } // Let the server find an open port
        },
        debug: {
            $filter: { $env: 'NODE_ENV' },
            $default: {
                log: ['error'],
                request: ['error']
            },
            production: {
                request: ['implementation']
            }
        },
        routes: {
            files: {
                relativeTo: Path.resolve(__dirname, '..', 'client', 'build')
            }
        }
    },
    register: {
        plugins: [
            // MUST REGISTER INERT BEFORE ROUTES, OR WILL THROW AN ERROR
            {
                plugin: require('@hapi/inert')
            },
            {
                plugin: require('@hapi/vision')
            },
            {
                plugin: '../lib', // Main plugin
                routes: {
                    prefix: '/api'
                },
                options: {
                    jwtKey: {
                        $filter: { $env: 'NODE_ENV' },
                        $default: {
                            $env: 'JWT_SECRET',
                            $default: 'test'
                        },
                        production: {
                            // In production do not default to "app-secret"
                            $env: 'JWT_SECRET'
                        }
                    }
                }
            },
            {
                plugin: {
                    $filter: { $env: 'NODE_ENV' },
                    $default: 'blipp',
                    production: Toys.noop
                }
            },
            {
                plugin: 'schwifty',
                options: {
                    $filter: { $env: 'NODE_ENV' },
                    $default: {},
                    $base: {
                        migrateOnStart: true,
                        knex: {
                            client: 'pg',
                            connection: {
                                database: process.env.DB_NAME,
                                user: process.env.DB_USER,
                                password: process.env.DB_PASS,
                                host: process.env.DB_HOST,
                                port: process.env.DB_PORT

                            }
                        }
                    },
                    production: {
                        migrateOnStart: false
                    }
                }
            }
        ]
    }
});

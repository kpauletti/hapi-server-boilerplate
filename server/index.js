'use strict';

const Glue = require('@hapi/glue');
const Manifest = require('./manifest');


(async () => {

    const manifest = Manifest.get('/');
    const server = await Glue.compose(
        manifest,
        { relativeTo: __dirname }
    );

    await server.initialize();

    //Registering static serve route here until I can find a better place.
    //Do not want to put in /routes to avoid */api* prefix

    await server.route(    {
        method: 'GET',
        path: '/{path*}',
        handler: {
            directory: {
                path: '.',
                listing: false,
                index: true
            }
        },
        options: {
            auth: false
        }
        // handler: (request, h) => null
    });

    await server.start();

    console.log(`Server started at ${server.info.uri}`);
})();

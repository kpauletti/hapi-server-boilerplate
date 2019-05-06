'use strict';

const Glue = require('@hapi/glue');
const Manifest = require('./manifest');

(async function () {

    const manifest = Manifest.get('/');
    const server = await Glue.compose(
        manifest,
        { relativeTo: __dirname }
    );

    await server.initialize();

    await server.start();

    console.log(`Server started at ${server.info.uri}`);
})();

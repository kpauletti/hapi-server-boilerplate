# Hapi.js Api / Server Boiletplate

This boilerplate utilizes the Hapi Pal ecosystem for a highly scalable server.
Out-of-box configured with:
* JWT authentication
* Password hashing funcs bound to `server.methods`
* Docker-compose to spin up `postgres` and `PGAdmin 4` containers
* Objection/Knex query builder via `schwifty`
* Model schema validation using `Joi` via `schwifty`
* Example CRUD routes for a mock `user` model
* Example services for separating business logic from route handlers
* Eslint configured


### Config

- Environment
    - Assumes docker is installed
    - ENV vars sample can be found at `sample.env`, simply rename this file to `.env` and configure with your credentials
    - **IMPORTANT** : I use a script to export all my `.env` variables to my shell. Meaning this WILL NOT work for you unless you configure this project to use `dotenv` or you export the vars yourself.

### Useage

- Clone repo and `npm i`
- `npm run up` to spin up postgres DB
- `npm start` to start server


#### REACT SSR

If you were planning on coupling this with a react front end, checkout the `mullet` branch which is configured for SSR React, pulling all the static files from the `build` folder.

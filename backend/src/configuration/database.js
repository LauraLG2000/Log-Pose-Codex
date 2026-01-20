const knex = require('knex');

const db = knex({
    client: 'mysql',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'user_pirates',
        password: 'password_pirates',
        database: 'pirates'
    },
    useNullAsDefault: true
});

exports.db = db;
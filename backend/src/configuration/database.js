const knex = require('knex');

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: 'pirates.db'
    },
    useNullAsDefault: true
});

exports.db = db;
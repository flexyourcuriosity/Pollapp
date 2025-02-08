const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Vickee@mysql07',
    database: 'poll_db',
});

module.exports = pool;


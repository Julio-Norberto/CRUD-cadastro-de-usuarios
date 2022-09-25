const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'admin@admin',
    database: 'ReactNode',
})

module.exports = pool
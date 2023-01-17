const pool = require('pg')

const pool = new pool({
    user: 'postgres',
    host: 'localhost',
    database : 'mydixi',
    password: '123456',
    port : 5432
})
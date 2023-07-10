const mysql = require('mysql2');

const pool = mysql.createPool({

    host:"localhost",
    user:"root",
    database:"seed-tracking-api",
    password:"soza123@Sa."
});

module.exports = pool.promise();
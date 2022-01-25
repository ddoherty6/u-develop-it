const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'A&Mik3()!1Don',
  database: 'election'
});

module.exports = db;

const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_PORT,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");
});

//   // Example query
//   db.query('SELECT 1 + 1 AS solution', (err, results) => {
//     if (err) {
//       console.error('Error executing query:', err);
//       return;
//     }
//     console.log('The solution is:', results[0].solution);
//   });

// EXPORT CONNECTIONS -------------------------------------------
module.exports = {};

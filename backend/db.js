const mysql = require("mysql2");

const db = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_PORT,
};

const dbConnection = mysql.createConnection({
  ...db,
  database: "",
});

dbConnection.connect((err) => {
  err
    ? console.error("Error connecting to the database:", err)
    : console.log("Connected to the database!")
  return;
});

// for the first time, then DB was not built
dbConnection.query("CREATE database IF NOT EXISTS ticket_manager", (err) => {
  err ? err : console.log("Database created succsesfully!");

  dbConnection.query("USE ticket_manager", (err) => {
    err ? err : console.log("Database is using!");

    const adminUsersQuery = `
      CREATE TABLE IF NOT EXISTS adminusers (
        id int NOT NULL AUTO_INCREMENT,
        name varchar(255) NOT NULL,
        surname varchar(255) NOT NULL,
        email varchar(255) NOT NULL,
        password varchar(255) NOT NULL,
        PRIMARY KEY (id),
        UNIQUE KEY email_UNIQUE (email)
      )
      `;
    dbConnection.query(adminUsersQuery, (err) => {
      err ? err : console.log("AdminUsers Table created!");
    });

    const eventUsersQuery = `
      CREATE TABLE IF NOT EXISTS eventusers (
        id int NOT NULL AUTO_INCREMENT,
        name varchar(255) NOT NULL,
        surname varchar(255) NOT NULL,
        email varchar(255) NOT NULL,
        phone varchar(255) NOT NULL,
        adminId int NOT NULL,
        PRIMARY KEY (id),
        UNIQUE KEY email_UNIQUE (email),
        KEY ID (adminId),
        CONSTRAINT adminId_idx FOREIGN KEY (adminId) REFERENCES adminusers (id)
      )
      `;
    dbConnection.query(eventUsersQuery, (err) => {
      err ? err : console.log("EventUsers Table created!");
    });
  });
});

// EXPORT CONNECTIONS -------------------------------------------
module.exports = { dbConnection };

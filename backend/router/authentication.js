const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { dbConnection } = require("../db");
const { defaultCallback } = require("../utills/dbUtills");
const { verifyToken } = require("../utills/authenticationUtills");

const router = express.Router();

// REGISTER verify ----------------------------------------------------
router.post("/register", (req, res) => {
  const { body } = req;
  const salt = 12;
  const hashedPassword = bcrypt.hashSync(body.password, salt);

  dbConnection.execute(
    `INSERT INTO adminusers (name, surname, email, password) VALUES (?, ?, ?, ?);`,
    [body.name, body.surname, body.email, hashedPassword],
    (err, result) => defaultCallback(err, result, res)
  );
});

// LOGIN verify ----------------------------------------------------
router.post("/login", (req, res) => {
    const { body } = req;
    const incorrectCredentialResp = () =>
      res.json({
        message: "Incorrect email or password...",
      });
  
    if (!body.email || !body.password) {
      incorrectCredentialResp();
      return;
    }
  
    dbConnection.execute(
      `SELECT * FROM adminusers WHERE email=?;`,
      [body.email],
      (err, result) => {
        if (result.length === 0) {
          incorrectCredentialResp();
        } else {
          const user = result[0]; //visada [0]
          const { id, email, name, surname} = user;
          const isPasswCor = bcrypt.compareSync(body.password, user.password);
  
          if (isPasswCor) {
            // token // using JWT_SCRET from /.env/
            const token = jwt.sign({ id, email, name, surname }, process.env.JWT_SECRET);
            res.json({
              message: "Successfully logged in!",
              token,
              name
            });
          } else {
            incorrectCredentialResp();
          }
        }
      }
    );
  });

// tikrina ar token'as yra validus
router.get("/token/verify", verifyToken, (req, res) => {
  res.json(res.locals.user);
});

// EXPORTS --------------------------------------------------
module.exports = router;

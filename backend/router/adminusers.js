const express = require("express");
const router = express.Router();

const { dbConnection } = require("../db");
const { defaultCallback } = require("../utills/dbUtills");

// GET ------------------------------------------------------------
router.get("/adminusers-list", (req, res) => {
  dbConnection.execute(`SELECT * FROM adminusers`, (err, result) =>
    defaultCallback(err, result, res)
  );
});

// POST ------------------------------------------------------------
router.post("/register", (req, res) => {
  const {
    body: { name, surname, email, password },
  } = req;

  dbConnection.execute(
    "INSERT INTO adminusers (name, surname, email, password) VALUES (?, ?, ?, ?)",
    [name, surname, email, password],
    (err, result) => defaultCallback(err, result, res)
  );
});

// EXPORTS --------------------------------------------------
module.exports = router;

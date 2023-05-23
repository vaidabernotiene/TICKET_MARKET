const express = require("express");
const router = express.Router();

const { dbConnection } = require("../db");
const { defaultCallback } = require("../utills/dbUtills");

// GET ------------------------------------------------------------
router.get("/users-list", (req, res) => {
    dbConnection.execute(`SELECT * FROM adminusers`, (err, result) =>
      defaultCallback(err, result, res)
    );
  });

// EXPORTS --------------------------------------------------
module.exports = router;
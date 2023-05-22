const express = require("express");
const router = express.Router();
const { defaultCallback } = require("../utills/dbUtills");

const { dbConnection } = require("../db");

// GET ------------------------------------------------------------
router.get("/users-list", (req, res) => {
    dbConnection.execute(`SELECT * FROM adminusers`, (err, result) =>
      defaultCallback(err, result, res)
    );
  });

// EXPORTS --------------------------------------------------
module.exports = router;
const express = require("express");
const router = express.Router();

const { dbConnection } = require("../db");
const { defaultCallback } = require("../utills/dbUtills");
const { verifyToken } = require("../utills/authenticationUtills");

// GET ------------------------------------------------------------
router.get("/participants_list", verifyToken, (req, res) => {
  dbConnection.execute(`SELECT * FROM eventusers`, (err, result) =>
    defaultCallback(err, result, res)
  );
});

// POST ------------------------------------------------------------
router.post("/new_participant", verifyToken, (req, res) => {
  const {
    body: { name, surname, email, phone },
  } = req;

  dbConnection.execute(
    "INSERT INTO eventusers (name, surname, email, phone) VALUES (?, ?, ?, ?)",
    [name, surname, email, phone],
    (err, result) => defaultCallback(err, result, res)
  );
});

// PUT -------------------------------------------------------------
router.put("/new_participant/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  const {
    body: { name, surname, email, phone },
  } = req;

  dbConnection.execute(
    "UPDATE eventusers SET name=?, surname=?, email=?, phone=? WHERE id=?",
    [name, surname, email, phone, id],
    (err, result) => defaultCallback(err, result, res)
  );
});

// DELETE -----------------------------------------------------------
router.delete("/participants_list/:id", verifyToken, (req, res) => {
  const { id } = req.params;

  dbConnection.execute(
    "DELETE FROM eventusers WHERE id=?",
    [id],
    (err, result) => defaultCallback(err, result, res)
  );
});

// EXPORTS --------------------------------------------------
module.exports = router;

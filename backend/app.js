require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRouter = require('./router/authentication');
const adminUsersRouter = require("./router/adminusers");
const participantsRouter = require("./router/eventparticipants")

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(authRouter);
app.use(adminUsersRouter);
app.use(participantsRouter)

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});

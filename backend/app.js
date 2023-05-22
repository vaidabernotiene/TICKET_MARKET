require("dotenv").config();
const express = require('express');
const cors = require('cors');

const adminUsersRouter = require('./router/adminusers')

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(adminUsersRouter)

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});

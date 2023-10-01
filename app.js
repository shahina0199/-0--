const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// ... (other middleware imports)

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
// ... (other security middleware)

// Undefined route
app.use((req, res) => {
  res.status(404).json({ status: 'error', message: 'Not Found' });
});

module.exports = app;

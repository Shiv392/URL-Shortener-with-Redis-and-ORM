const express = require('express');
const body_parser = require('body-parser');
const cors = require('cors');
const auth_routes = require('../routes/auth/index.js');

const app = express();

// Middleware
app.use(body_parser.json());
app.use(cors());

app.use(auth_routes);


module.exports = app;
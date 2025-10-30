const express = require('express');
const url_index_routes = express.Router();

const url_routes = require('./url_routes');

url_index_routes.use(url_routes);

module.exports = url_index_routes;
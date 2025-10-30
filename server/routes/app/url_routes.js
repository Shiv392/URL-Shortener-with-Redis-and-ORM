const express = require('express');
const url_routes = express.Router();
const url_controller = require('../../controllers/app/url');

url_routes.get('/url', url_controller)


module.exports = url_routes;
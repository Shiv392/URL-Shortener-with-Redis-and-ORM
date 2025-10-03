const express = require('express');
const login_routes = express.Router();
const login_controller = require('../../controllers/auth/login_controller');

login_routes.post('/login', login_controller);

module.exports = login_routes;
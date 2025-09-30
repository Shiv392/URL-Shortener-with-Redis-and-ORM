const express = require('express');
const auth_routes = express.Router();
const login_routes = require('./login.js');
const signup_routes = require('./signup.js');

auth_routes.use('/auth', login_routes);
auth_routes.use('/auth', signup_routes);

module.exports = auth_routes;
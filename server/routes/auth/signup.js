const express = require('express');
const signup_routes = express.Router();
const signup_controller = require('../../controllers/auth/signup_controller');

signup_routes.post('/signup', signup_controller);

module.exports = signup_routes;
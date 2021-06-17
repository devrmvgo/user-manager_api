const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');

routes.get('/', UserController.index)

module.exports = routes;
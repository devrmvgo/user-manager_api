const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('welcome to api for management users')
})

module.exports = routes;
const db = require("../models");
const Users = db.users;

module.exports = {
  async index(req, res) {
    res.send('welcome to api for management users')
  }
};
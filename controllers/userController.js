const User = require('../models/userModel');

exports.getUsers = (req, res) => {
  const users = User.fetchAll();
  res.render('users', { users });
};

exports.addUser = (req, res) => {
  const { name, age } = req.body;
  User.addUser({ name, age });
  res.redirect('/');
};

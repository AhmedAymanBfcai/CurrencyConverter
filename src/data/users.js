const bcrypt = require('bcryptjs');

const users = [
  {
    name: 'Ahmed Ayman',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Diaa Ayman',
    email: 'diaa@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Ziad Ayman',
    email: 'ziad@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

module.exports = users;

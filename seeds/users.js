const { User } = require('../models');

const userData = [
  {
    username: 'Richard',
    password: 'password'
  },
  {
    username: 'Erlich',
    password: 'password'
  },
  {
    username: 'BigHead',
    password: 'password'
  },
  {
    username: 'Gilfoyle',
    password: 'password'
  },
];

const seedUsers = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUsers;
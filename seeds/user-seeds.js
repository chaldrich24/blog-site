const { User } = require('../models');

const userData = [
    {
        username: 'joel',
        email: 'joel@blog.com',
        password: 'animal'
    },
    {
        username: 'ellie',
        email: 'ellie@blog.com',
        password: 'animal'
    },
    {
        username: 'tre',
        email: 'tre@blog.com',
        password: 'animal'
    }
];

const seedUsers = () => User.bulkCreate(userData, {validate: true, hooks: true, individualHooks: true});

module.exports = seedUsers;
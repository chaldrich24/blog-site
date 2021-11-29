const { User } = require('../models');

const userData = [
    {
        username: 'joel',
        email: 'joel@blog.com'
    },
    {
        username: 'ellie',
        email: 'ellie@blog.com'
    },
    {
        username: 'tre',
        email: 'tre@blog.com'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
const { Post } = require('../models');

const postData = [
    {
        post_title: 'First Post',
        post_contents: 'This is my first post.',
        user_id: 1
    },
    {
        post_title: 'Old',
        post_contents: 'Getting older these days.',
        user_id: 2
    },
    {
        post_title: 'Where',
        post_contents: 'Where have I been all these years.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
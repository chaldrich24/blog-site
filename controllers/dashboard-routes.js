const router = require('express').Router();
const { User, Post } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('dashboard', { posts, loggedIn: true, username: req.session.username });
            // res.json(posts);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

module.exports = router;
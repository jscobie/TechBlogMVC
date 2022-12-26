const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Get all posts data to display on / homepage - route to homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      attributes: [
        'id',
        'post_text',
        'title',
        'created_at'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    });
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
      username: req.session.username
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Route for log in page
router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// Route for sign up page
router.get('/signup', (req, res)=> {
  try {
    res.render('signup');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Route for a single clicked post
router.get('/post/:id', async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      attributes: [
        'id',
        'post_text',
        'title',
        'created_at',
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    });
    const post = dbPostData.get({ plain: true });
    res.render('single-post', {
      post,
      logged_in: req.session.logged_in,
      username: req.session.username
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({error : err, message : 'Something went wrong.'});
  }
});

module.exports = router;
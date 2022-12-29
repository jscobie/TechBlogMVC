const router = require('express').Router();
const { response } = require('express');
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all posts
router.get('/', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      attributes: [
        'id',
        'post_text',
        'title',
        'created_at'],
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
    })
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get specific post
router.get('/:id', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findOne({
      where: {
        id: req.params.id
      },
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
    const singlePost = dbPostData.get({ plain: true });
    res.status(200).json({singlePost});
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

// Create a new post
router.post('/', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.create({
      title: req.body.title,
      post_text: req.body.post_text,
      user_id: req.session.user_id
    });
    res.status(200).json({ dbPostData, message: 'Post Created'});
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a specific post
router.put('/:id', async (req, res) => {
  try {
    const dbPostData = await Post.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(dbPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a specific post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.destroy({
      where:
      {id : req.params.id}
    });
    res.status(200).json(dbPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
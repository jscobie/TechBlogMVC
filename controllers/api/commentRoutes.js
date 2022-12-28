const router = require('express').Router();
const { response } = require('express');
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all comments
router.get('/', withAuth, async (req, res) => {
  try {
    const dbCommentData = await Comment.findAll();
    const comments = dbCommentData.map((comment) => comment.get({ plain: true}));
    res.status(200).json({ comments });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Add a new comment - using withAuth
router.post('/', withAuth, async (req, res) => {
  try {
    const dbCommentData = await Comment.create({
      comment_text: req.body.comment_text,
      user_id: req.session.user_id,
      post_id: req.body.post_id
    });
    res.status(200).json({ dbCommentData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Delete a comment
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const dbCommentData = await Comment.destroy({
      where: {
        id : req.params.id
      }
    });
    res.status(200).json(dbCommentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
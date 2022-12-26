const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'Relax Richard',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'This is why you get hacked.',
    user_id: 1,
    post_id: 3
  },
  {
    comment_text: 'Are you hacking at parties to hack?',
    user_id: 2,
    post_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
const { Comment } = require('../models');

const commentData = [
  {
    contents: 'Relax Richard',
    user_id: 2,
    post_id: 1
  },
  {
    contents: 'This is why you get hacked.',
    user_id: 1,
    post_id: 3
  },
  {
    contents: 'Are you hacking at parties to hack?',
    user_id: 2,
    post_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
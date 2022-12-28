const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// Get all users information for checking
router.get('/', async (req, res) => {
  try {
    const dbUserData = await User.findAll({
      attributes: { exclude: ['password'] }
    });
    const userData = dbUserData.map((users) => users.get({ plain: true }));
    res.status(200).json({ userData });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get single user information
router.get('/:id', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      attributes: { exclude: ['password'] },
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Post,
          attributes: ['id', 'title', 'post_text', 'created_at']
        },
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'created_at'],
          include: {
            model: Post,
            attributes: ['title', 'post_id']
          }
        }
      ]
    });
    const userData = dbUserData({ plain: true });
    res.status(200).json({ userData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create new users
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      password: req.body.password
    });
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.logged_in = true;
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Handles log in, find user - validate password, then build session
router.post('/login', async (req, res) => {
  try {
    // Find the user who matches with the username in the database
    const dbUserData = await User.findOne({
      where: {
        username:  req.body.username
      }
    });
    // If there is no match with the username, send a incorrect message to the user and have them retry
    if (!dbUserData) {
      res.status(400).json({ message: 'Incorrect username or password, please try again' });
      return;
    }
    // Now verify the password the user has put in and check in the database if this password coincides with the username 
    const validPassword = await dbUserData.checkPassword(req.body.password);
    // If the password doesn't exist, then send a error message of wrong password and have them retry.
    if (!validPassword) {
      res.status(401).json({ message: 'Incorrect password, please try again' });
      return;
    }
    // Session variables based on the current logged in user
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.logged_in = true;
      res.json({ user: dbUserData, message: 'You are logged in'});
    });
  } catch (error) {
    res.status(500).json({error: error, message: 'Something went wrong.'});
    console.log(error);
  }
});

// Handles log out by destroying sesssion
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
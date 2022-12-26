const withAuth = (req, res, next) => {
    // If the user is not logged in, kick out to login
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      // Else, they are signed in, continue
      next();
    }
  };
  
  module.exports = withAuth;
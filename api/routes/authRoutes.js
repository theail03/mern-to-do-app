const express = require('express');
const passport = require('passport');
const router = express.Router();

// @desc    Auth with Google
// @route   GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// @desc    Google auth callback
// @route   GET /auth/google/callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: process.env.CLIENT_URL, session: true }),
  (req, res) => {
    res.redirect(process.env.CLIENT_URL);
  }
);

// @desc    Logout user
// @route   /auth/logout
router.get('/logout', (req, res, next) => {
  req.logout((err) => {
      if (err) { return next(err); }
      res.send("done");
  });
});

// @desc    Get user data
// @route   /auth/getuser
router.get("/getuser", (req, res) => {
  res.send(req.user);
});

module.exports = router;
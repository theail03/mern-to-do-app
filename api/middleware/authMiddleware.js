module.exports = {
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      return res.status(401).json("You are not authenticated!");
    }
  }
}
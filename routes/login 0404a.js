var express = require('express');
var router = express.Router();


var passport = require('passport');
var Strategy = require('passport-local').Strategy;

// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.
passport.use(new Strategy(
  function(username, password, cb) {
    db.users.findByUsername(username, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false); }
      return cb(null, user);
    });
  }));


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  db.users.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});


var users = require('../database/users')


router.get('/', function(req, res, next) {
  res.render('login', {});
});

router.post('/', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res, next) {
  //pool.query
  pool.query("SELECT * from members where Email=?", req.body.inputEmail)
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      //res.render('calendar', {tourney_list:rows});
      //console.log(rows[0].id);
      //console.log("*******==============================")
      if (rows.length) 
        res.redirect('/members/' + rows[0].id);
      else
        res.render('login', {});
    })
    .catch(err => {
      res.send('respond with a resource');
    });
});

module.exports = router;
module.exports = passport;
//module.exports = {router, passport};

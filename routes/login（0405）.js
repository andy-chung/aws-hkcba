var express = require('express');
const passport = require('passport');
var router = express.Router();
var pool = require('../database/dbpool')
//var passport = require('../database/passport')

router.get('/', function(req, res, next) {
  res.render('login', {});
});



router.post('/', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    //return res.redirect('/members/' + user.id);
    /*
    req.login(user, function(err) {
      console.log('***** inside login ******');
      if (err) { 
        console.log('***** login err ******');
        console.log(err);
        return next(err); }
      //return res.redirect('/users/' + user.username);
      return res.redirect('/members/' + user.id);
    });
    */
    console.log('%%%%%%%%%%%%');
    console.log(req.session);
    console.log(err);
    console.log(user);
    console.log('%%%%%%%%%%%%');
    req.session.save(function(err) {
      //if (err) {console.log(err); return next(err)}
      if (err) {return next(err)}
      //return res.redirect('/members' + user.id);
    });
      return res.redirect('/members' + user.id);


  })(req, res, next);
});




module.exports = router;

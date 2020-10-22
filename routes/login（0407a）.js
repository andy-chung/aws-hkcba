var express = require('express');
const passport = require('passport');
var router = express.Router();
var pool = require('../database/dbpool')
//var passport = require('../database/passport')

router.get('/', function(req, res, next) {
  /*  console.log('**** flash *****');
  console.log(req.flash('error'));
  console.log(req.flash('error'));  */
  res.render('login', {flashmessage: req.flash('error')});
});



router.post('/', 
  passport.authenticate('local', 
    { failureRedirect: '/login',
      failureFlash: 'Invalid username or password.'}),
  function(req, res, next) {
    console.log('*** abcde ******');
    console.log(req.user);
    res.redirect('/members');

});        //router.post




module.exports = router;

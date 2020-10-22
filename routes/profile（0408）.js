var express = require('express');
const passport = require('passport');
var router = express.Router();
var pool = require('../database/dbpool')
//var passport = require('../database/passport')

router.get('/', function(req, res, next) {
  /*  console.log('**** flash *****');
  console.log(req.flash('error'));
  console.log(req.flash('error'));  */
  res.render('profileform', {usage: 'Register', flashmessage: req.flash('error')});
});



router.post('/', 
  function(req, res, next) {

  //pool.query
    pool.query("insert into members(Email, Phone, MName, Status, Username, Password) values(?,?,?,?,?)", 
      [req.body.inputEmail, parseInt(req.body.inputPhone, 10), req.body.inputMname, 'Selfreg', req.body.inputUsername, req.body.inputPassword])
    .then((rows) => {
      //res.send(rows);
      res.redirect('/login');
    })
    .catch(err => {
      res.send(err);
    });

});


module.exports = router;

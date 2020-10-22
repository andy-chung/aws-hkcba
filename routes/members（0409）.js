var express = require('express');
var router = express.Router();
var pool = require('../database/dbpool')
const passport = require('passport');

/* GET users listing. */
router.get('/', 
  //require('connect-ensure-login').ensureLoggedIn(),
  function(req, res, next) {
    console.log('*** members ********');
    console.log(req.user);
    if (!req.user) {
      res.redirect('/login');
    } else {
   let mbrreglist = [];

  //pool.query


  pool.query("SELECT Game,Tdate,Reglink as url from tourneysopen inner join tourneys on Tourney_id = tourneys.id order by Tdate")
    .then((rows) => {
      //      console.log("==============================")
      //console.log(rows); //[ {val: 1}, meta: ... ]
      //console.log("==============================")
      //res.send(rows);
      //res.render('members', {masterp_list:rows});
      mbrreglist = rows;


  pool.query("SELECT Tdate, Points, Category, Game from masterpoints inner join tourneys on Tourney_id = tourneys.id and Member_id = ? and Category != 'Pre-reg' order by Tdate desc", req.user.id)
    .then((rows) => {
      //console.log("==============================")
      //console.log(rows); //[ {val: 1}, meta: ... ]
      //console.log("==============================")
      //res.send(rows);
      res.render('members', {masterp_list:rows, mrlink_list: mbrreglist, playername: req.user.Mname});
    })
    .catch(err => {
      res.send(err);
    });


    })
    .catch(err => {
      res.send(err);
    });


  }
});

module.exports = router;

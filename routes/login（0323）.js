var express = require('express');
var router = express.Router();
var pool = require('../database/dbpool')

router.get('/', function(req, res, next) {
  res.render('login', {});
});

router.post('/', function(req, res, next) {
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

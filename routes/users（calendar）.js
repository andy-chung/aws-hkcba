var express = require('express');
var router = express.Router();
var pool = require('../database/dbpool')

/* GET users listing. */
router.get('/', function(req, res, next) {
  //pool.query
  pool.query("SELECT * from tourneys")
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      res.render('calendar', {tourney_list:rows});
    })
    .catch(err => {
      res.send('respond with a resource');
    });
});

module.exports = router;

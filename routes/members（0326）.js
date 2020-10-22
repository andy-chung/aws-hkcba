var express = require('express');
var router = express.Router();
var pool = require('../database/dbpool')

/* GET users listing. */
router.get('/:id', function(req, res, next) {
   let mbrreglist = [];

  //pool.query
  pool.query("SELECT Game,Tdate,concat(Reglink,?) as url from tourneysopen inner join tourneys on Tourney_id = tourneys.id", req.params.id.toString())
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      //res.render('members', {masterp_list:rows});
      mbrreglist = rows;


  pool.query("SELECT Tdate, Points, Category, Game from masterpoints inner join tourneys on Tourney_id = tourneys.id and Member_id = ? and Category != 'Pre-reg'", req.params.id)
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      res.render('members', {masterp_list:rows, mrlink_list: mbrreglist});
    })
    .catch(err => {
      res.send(err);
    });


    })
    .catch(err => {
      res.send(err);
    });


});

module.exports = router;

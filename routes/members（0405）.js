var express = require('express');
var router = express.Router();
var pool = require('../database/dbpool')

/* GET users listing. */
router.get('/:id', 
  //require('connect-ensure-login').ensureLoggedIn(),
  function(req, res, next) {
   let mbrreglist = [];
   let pname = '';

  //pool.query
  pool.query("SELECT * from members where id = ?", req.params.id)
    .then((rows) => {
      pname = rows[0].MName;


  pool.query("SELECT Game,Tdate,concat(Reglink,?) as url from tourneysopen inner join tourneys on Tourney_id = tourneys.id order by Tdate", req.params.id.toString())
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      //res.render('members', {masterp_list:rows});
      mbrreglist = rows;


  pool.query("SELECT Tdate, Points, Category, Game from masterpoints inner join tourneys on Tourney_id = tourneys.id and Member_id = ? and Category != 'Pre-reg' order by Tdate desc", req.params.id)
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      res.render('members', {masterp_list:rows, mrlink_list: mbrreglist, playername: pname});
    })
    .catch(err => {
      res.send(err);
    });


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

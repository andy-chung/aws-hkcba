var express = require('express');
var router = express.Router();
var pool = require('../database/dbpool')

/* GET users listing. */
router.get('/:tid/:mid', function(req, res, next) {
  let pname = '';
  //pool.query
  pool.query("SELECT * from members where id = ?", req.params.mid)
    .then(rows => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      //res.render('preregform', {playername: rows[0].MName});
      pname = rows[0].MName;


    pool.query("SELECT * from tourneys where id = ?", req.params.tid)
      .then(rows => {
        console.log("==============================")
        console.log(rows); //[ {val: 1}, meta: ... ]
        console.log("==============================")
        //res.send(rows);
        res.render('preregform', {gamename: rows[0].Game, gamedate: rows[0].Tdate, playername: pname});
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

var express = require('express');
var router = express.Router();
var pool = require('../database/dbpool')

/* GET users listing. */
router.get('/:tid/:mid', function(req, res, next) {
  //pool.query
  pool.query("SELECT * from members where id = ?", req.params.mid)
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      res.render('preregform', {MName: rows[0].MName});
    })
    .catch(err => {
      res.send('err');
    });
});

module.exports = router;

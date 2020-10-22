var express = require('express');
var router = express.Router();
var pool = require('../database/dbpool')

/* GET users listing. */
router.get('/', function(req, res, next) {
  //pool.query
  pool.query("select ROW_NUMBER() OVER (order by MName) as Rownum, MName, Rank from members inner join ranking on members.id=Member_id and Rank='NGM'")
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      res.render('ranking', {ngm_list:rows});
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;

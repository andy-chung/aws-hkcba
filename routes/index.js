var express = require('express');
var router = express.Router();
var pool = require('../database/dbpool')

/* GET users listing. */
router.get('/', function(req, res, next) {
  //pool.query
  pool.query("SELECT * from news order by Pdate desc limit 8")
    .then((rows) => {
      //      console.log("==============================")
      // console.log(rows); //[ {val: 1}, meta: ... ]
      // console.log("==============================")
      //res.send(rows);
      res.render('homepage', {post_list:rows});
    })
    .catch(err => {
      res.send('respond with a resource');
    });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var pool = require('../database/dbpool')

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  //pool.query
  pool.query("SELECT * from masterpoints where Member_id = ?", req.params.id)
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      //res.send(rows);
      res.render('members', {masterp_list:rows});
    })
    .catch(err => {
      res.send('respond with a resource');
    });
});

module.exports = router;

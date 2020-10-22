var express = require('express');
var router = express.Router();

var pool = require('../database/dbpool')

/* GET users listing. */

router.get('/:id', function(req, res, next) {
  //pool.query
  pool.query("select MName, Description from masterpoints inner join members on Member_id=members.id and Tourney_id= ?", req.params.id)
    .then((rows) => {
      console.log("==============================")
      console.log(rows); //[ {val: 1}, meta: ... ]
      console.log("==============================")
      res.render('tourneys', {player_list:rows});
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;

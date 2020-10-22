var express = require('express');
var router = express.Router();
var pool = require('../database/dbpool')

/* GET users listing. */
router.get('/', function(req, res, next) {

  let startDate = new Date();
  console.log(startDate);
  startDate.setMonth(startDate.getMonth() - 2);
  console.log(startDate);

  let mariadate = '';
  mariadate = startDate.toISOString().slice(0, 19).replace('T', ' '); 


  //pool.query
  pool.query("select Tdate, Venue, Game, Link from tourneys left join tourneysopen on tourneys.id=Tourney_id where Tdate > ? order by Tdate", mariadate)
    .then((rows) => {
      //res.send(rows);
      res.render('calendar', {tourney_list:rows});
    })
    .catch(err => {
      res.send('respond with a resource');
    });
});

module.exports = router;

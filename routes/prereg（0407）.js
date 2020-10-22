var express = require('express');
var router = express.Router();
var pool = require('../database/dbpool')

/* GET users listing. */
router.get('/:tid', function(req, res, next) {
  console.log('***** prereg ********');
  console.log(req.user);
    if (!req.user) {
      res.redirect('/login');
    } else {
  let pname = '';
  //pool.query
  pool.query("SELECT * from members where id = ?", req.user.id)
    .then(rows => {
      //res.send(rows);
      //res.render('preregform', {playername: rows[0].MName});
      pname = rows[0].MName;


    pool.query("SELECT * from tourneys where id = ?", req.params.tid)
      .then(rows => {
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

    }

});


/* POST users listing. */
router.post('/:tid', function(req, res, next) {
 if (req.body.regRadios == 'optionRegister') {

  //pool.query
  pool.query("delete from masterpoints where Member_id = ? and Tourney_id = ?", [req.user.id, req.params.tid])
    .then(rows => {
      //res.send(rows);
      //res.render('preregform', {playername: rows[0].MName});


    pool.query("insert into masterpoints(Tourney_id, Points, Category, Description, Member_id) values(?,?,?,?,?)", [req.params.tid, 0, 'Pre-reg', req.body.inputDesc, req.user.id])
      .then(rows => {
        //res.send(rows);
        //res.render('preregform', {gamename: rows[0].Game, gamedate: rows[0].Tdate, playername: pname});
        res.redirect('/tourneys/' + req.params.tid);
      })
    .catch(err => {
      res.send(err);
    });


    })
    .catch(err => {
      console.log('Not registered before');
      res.send(err);
    });


  } else {

  //pool.query
  pool.query("delete from masterpoints where Member_id = ? and Tourney_id = ?", [req.user.id, req.params.tid])
    .then(rows => {
      //res.send(rows);
      //res.render('preregform', {playername: rows[0].MName});
      res.redirect('/tourneys/' + req.params.tid);
    })
    .catch(err => {
      console.log('Not registered before');
      res.send(err);
    });

  }  
});


module.exports = router;

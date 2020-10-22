var express = require('express');
var router = express.Router();
var pool = require('../database/dbpool')

const { check, validationResult, body } = require('express-validator');
//const { sanitizeBody } = require('express-validator/filter');


/* GET users listing. */
router.get('/:tid', function(req, res, next) {
  console.log('***** prereg ********');
  console.log(req.user);
    if (!req.user) {
      res.redirect('/login');
    } else {
  //pool.query


    pool.query("SELECT * from tourneys where id = ?", req.params.tid)
      .then(rows => {
        //res.send(rows);
        res.render('preregform', {gamename: rows[0].Game, gamedate: rows[0].Tdate, playername: req.user.Mname});
      })
    .catch(err => {
      res.send(err);
    });



    }

});


/* POST users listing. */
router.post('/:tid', [

    // Validate fields.
    check('inputDesc').isLength({ min: 1 }).trim().withMessage('Please sepecify at least 1 Partner or teammates.'),

    // Sanitize fields.
    body('inputDesc').trim().escape(),


  function(req, res, next) {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
          //            res.render('preregform', { playername: req.user.Mname, errors: errors.array() });
    pool.query("SELECT * from tourneys where id = ?", req.params.tid)
      .then(rows => {
        //res.send(rows);
        res.render('preregform', {gamename: rows[0].Game, gamedate: rows[0].Tdate, playername: req.user.Mname, errors: errors.array() });
      })
    .catch(err => {
      res.send(err);
    });
            return;
        }
        else {
            // Data from form is valid.


 if (req.body.regRadios == 'optionRegister') {

  //pool.query
  pool.query("delete from masterpoints where Member_id = ? and Tourney_id = ?", [req.user.id, req.params.tid])
    .then(rows => {
      //res.send(rows);
      //res.render('preregform', {playername: rows[0].Mname});


    pool.query("insert into masterpoints(Tourney_id, Points, Category, Description, Member_id) values(?,?,?,?,?)", [req.params.tid, 0, 'Pre-reg', req.body.inputDesc, req.user.id])
      .then(rows => {
        //res.send(rows);
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
      //res.render('preregform', {playername: rows[0].Mname});
      res.redirect('/tourneys/' + req.params.tid);
    })
    .catch(err => {
      console.log('Not registered before');
      res.send(err);
    });

  }  
        }

}


]);


module.exports = router;

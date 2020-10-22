var express = require('express');
const passport = require('passport');
var router = express.Router();
var pool = require('../database/dbpool');
var users = require('../database/users');
//var passport = require('../database/passport');
const { check, validationResult, body } = require('express-validator');


router.get('/', function(req, res, next) {
  console.log('**** profile page *****');
  console.log(req.user);
  if (!req.user) {
    res.render('profileform', {usage: 'Register'});
  }
  else {
        // Create member object with escaped and trimmed data 
        var member = 
            {
                Username : req.user.Username,
                Password : req.user.Password,
                Mname : req.user.Mname,
                Email : req.user.Email,
                Phone : req.user.Phone
            };
    res.render('profileform', {usage: 'Profile', member: member});
  }
});



router.post('/', [ 

    // Validate fields.

  body('inputUsername').matches('^[a-zA-Z0-9]*$').withMessage('invalid Username'),
  body('inputPassword').matches('^[a-zA-Z0-9]*$').withMessage('invalid Password'),
  body('inputPhone').matches('^[0-9]*$').withMessage('invalid Phone'),
  body('inputEmail').isEmail().withMessage('invalid email'),
  body('inputConfirm').custom(function(value, {req}) {
    if(value != req.body.inputPassword) {
      throw new Error('Password not the same');
    }
    // Indicates the success of this synchronous custom validator
    return true;
  }),
/***************************    
body('inputUsername').custom(async function(value){
			var user = await users.findOneByUsername(value);
			return user.length == 0;
		})
		.withMessage('username already exits'),    
 ************************/    
    
    // Sanitize fields.
    body('inputUsername').trim().escape(),
    body('inputMname').trim().escape()
],

  function(req, res, next) {

        // Extract the validation errors from a request.
    const errors = validationResult(req);
    //const errors = await req.getValidationResult(req);
    console.log('**************profile before write errors');  
    console.log(errors);  
    console.log(errors.array());  

        // Create member object with escaped and trimmed data 
        var member = 
            {
                Username : req.body.inputUsername,
                Password : req.body.inputPassword,
                Mname : req.body.inputMname,
                Email : req.body.inputEmail,
                Phone : req.body.inputPhone
            };

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
          //            res.render('preregform', { playername: req.user.Mname, errors: errors.array() });
  res.render('profileform', {usage: 'Register', errors: errors.array(), member: member });
        }
        else {
            // Data from form is valid.

  if (!req.user) {        

  pool.query("select * from members where Username = ?", req.body.inputUsername)
    .then((rows) => {
      if(rows.length > 0) {
        let errorusername = 'Username already exists';
    console.log('**************profile before write errors username');  
  res.render('profileform', {usage: 'Register', errorusername: errorusername, member: member });
      } else {


  //pool.query
    pool.query("insert into members(Email, Phone, Mname, Status, Username, Password) values(?,?,?,?,?,?)", 
      [req.body.inputEmail, parseInt(req.body.inputPhone, 10), req.body.inputMname, 'Selfreg', req.body.inputUsername, req.body.inputPassword])
    .then((rows) => {
      //res.send(rows);
      res.redirect('/login');
    })
    .catch(err => {
      res.send(err);
    });



      }
    })
    .catch(err => {
      res.send(err);
    });

  }
  else {                 //for update profile

  //pool.query
    pool.query("update members set Email = ?, Phone = ?, Mname = ?, Password = ? where id = ?", 
      [req.body.inputEmail, parseInt(req.body.inputPhone, 10), req.body.inputMname, req.body.inputPassword, req.user.id])
    .then((rows) => {
      //res.send(rows);
      res.redirect('/members');
    })
    .catch(err => {
      res.send(err);
    });

  }

  }  

  }
);


module.exports = router;

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var compression = require('compression');
var helmet = require('helmet');

var session = require('express-session');
var flash = require('connect-flash');

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var calendarRouter = require('./routes/calendar');
var rankingRouter = require('./routes/ranking');
var refreshRouter = require('./routes/refresh');
var membersRouter = require('./routes/members');
var preregRouter = require('./routes/prereg');
var tourneysRouter = require('./routes/tourneys');
var loginRouter = require('./routes/login');
var filterpostsRouter = require('./routes/filterposts');
var logoutRouter = require('./routes/logout');
var profileRouter = require('./routes/profile');
var nlRouter = require('./routes/newsletters');

var app = express();

//***** Set up mariadb connection
//var mariadb = require('mariadb');
var pool = require('./database/dbpool')
//****** pool.getConnection()
pool
  .query("select 1 as val")
  .then(rows => {
    console.log(rows);
  })
  .catch(err => {
    console.log(err);
  });



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//app.use(helmet());
app.use(helmet({
  contentSecurityPolicy: false,
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true}));

app.use(compression()); // Compress all routes
app.use(flash());

console.log('&&&&&&&&&&&&&&&&&&&&&&');
//console.log(req.session);
// Initialize Passport and restore authentication state, if any, from the
// session.
//
var passport = require('./database/passport')
app.use(passport.initialize());
app.use(passport.session());



app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/calendar', calendarRouter);
app.use('/ranking', rankingRouter);
app.use('/ranking/*', rankingRouter);
app.use('/refreshrankingbyhkcba', refreshRouter);
app.use('/members', membersRouter);
app.use('/prereg', preregRouter);
app.use('/tourneys', tourneysRouter);
app.use('/login', loginRouter);
app.use('/filterposts', filterpostsRouter);
app.use('/logout', logoutRouter);
app.use('/profile', profileRouter);
app.use('/newsletters', nlRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

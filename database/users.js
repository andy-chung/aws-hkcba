var pool = require('./dbpool')

exports.findById = function(id, cb) {
  pool.query("select * from members where id = ?", id)
    .then((rows) => {
      return cb(null, rows[0]);
    })
    .catch(err => {
      cb(new Error('User ' + id + ' does not exist'));
    });

}

exports.findByUsername = function(username, cb) {
  //  console.log('$$$$$$$$$$$$' + username);
  pool.query("select * from members where Username = ?", username)
    .then((rows) => {
      console.log('$$$ password $$$'+ rows[0].Password);
      return cb(null, rows[0]);
    })
    .catch(err => {
      return cb(null, null);
    });

}


/**********************
exports.findOneByUsername = function(username) {
  //  console.log('$$$$$$$$$$$$' + username);
      console.log('$$$ findOne $$$');
  pool.query("select * from members where Username = ?", username)
    .then((rows) => {
      console.log('$$$ findOne $$$');
      console.log(rows);
      return rows;
    })
    .catch(err => {
      return err;
    });

}
 **********************/

const mariadb = require('mariadb');

//create pool
const pool = mariadb.createPool({
     host: 'localhost', 
     user:'root', 
     port:3306, 
     database: 'test', 
  //password: 'myPassword',
     connectionLimit: 5
});


// Export pool.
module.exports = pool;

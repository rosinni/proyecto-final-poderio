const mysqlConnection = require('../config/db.config');

const createUser = (req, res) => {

    let {email,password} = req.body;

    mysqlConnection.query('INSERT INTO `users`(`email`, `password`) VALUES (?,?)',[email,password], (err, rows) => {
      if(!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });  
  }

  exports.createUser = createUser;
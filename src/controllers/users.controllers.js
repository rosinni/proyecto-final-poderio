const mysqlConnection = require('../config/db.config');


//crear usuario
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


//obtener datos
  const getData = (req, res) => {

    mysqlConnection.query('SELECT * FROM `alumnos`', (err, rows) => {
        if(!err) {
            console.log(rows);
        res.json({"results":rows})
        } else {
          console.log(err);
        }
      }); 
  }

  //exportando los controladores
  exports.createUser = createUser;
  exports.getData = getData;
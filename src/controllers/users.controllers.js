const mysqlConnection = require('../config/db.config');
const jwt = require('jsonwebtoken');


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


  //login de usuario
  const login = (req, res)=>{

    let {email,password} = req.body;
    if (!email) return res.status(400).json({"msg":"Verifique el email"})
    if (!password) return res.status(400).json({"msg":"Verifique el password"})

    mysqlConnection.query('SELECT id FROM `users` WHERE email=? AND password=?',[email,password], (err, rows) => {
      if(!err) {
        //obtenemos el id
          const userID = rows[0].id;

          //si no hubo coincidencia en la busqueda devolvemos un msg
          if(!rows.length) return res.json({"msg":"Email o password incorrecto"})
      
          const token = jwt.sign({ userID }, process.env.JWT_KEY, { expiresIn: 60 * 60 });// Generamos el Token!!!
          return res.json({ userID, token });// Devolvera el usuario y el token creado recientemente al cliente

      } else {
        console.log(err)
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
  exports.login = login;
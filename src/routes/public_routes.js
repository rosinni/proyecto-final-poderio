const express = require('express');
const router = express.Router();

//importando controladores
const {createUser, getData, login} = require('../controllers/users.controllers');


//    =>/users
//app.METODO('RUTA',(req,res)=>{

//})
router.get('/', getData);
router.post('/users', createUser);
router.post('/login',login)


module.exports = router;
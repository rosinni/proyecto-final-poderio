const express = require('express');
const router = express.Router();

//importando controladores
const {createUser} = require('../controllers/users.controllers');

router.post('/users', createUser);

module.exports = router;
const express = require('express');
const router = express.Router();
const mysqlConnection = require('../config/db.config');
const {verifyToken} = require('../config/verifyToken');
const {getProfile} = require('../controllers/users.controllers');




router.get('/users/profile',verifyToken, getProfile);

module.exports = router;
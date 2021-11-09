const express = require('express');
const router = express.Router();
const {verifyToken} = require('../config/verifyToken');

router.get('/productos',verifyToken,(req,res)=>{
    res.json(req.user)
});

module.exports = router;
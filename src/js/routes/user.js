const { Userk, validate } = require('../models/task'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.post('/login', );

router.post('/register', async (req, res)=>{
	const {error} = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);
	
	
});

router.post('/me', );
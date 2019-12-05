const { User, validate } = require('../models/user'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


//router.post('/login', );

router.post('/register', async (req, res)=>{
	const {error} = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);
	
	let user=new User ({
	name: req.body.name,
	last-name: req.body.last-name,
	email: req.body.email
	});
	user= await user.save();
	res.send(user)
	
});

router.put('/me',async (req, res)=>{
	const {error} = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);
	
	const user=await User.update (req.params,{
	name: req.body.name,
	last-name: req.body.last-name,
	email: req.body.email
	}, 
	{new:true });
	
	res.send(user) });
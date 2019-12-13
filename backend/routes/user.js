const bcrypt = require('bcryptjs');
const { User, validate } = require('../models/user');
const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.find().sort();
  res.send(users);
});

router.get("/:id", async (req, res) => {
  const users = await User.find().sort();
  const user = users.filter(user => user._id == req.params.id);
  res.send(user);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('User already registered.');

  user = new User({
    name: req.body.name,
    lastname: req.body.lastname,
		email: req.body.email,
		password: req.body.password
	});

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
	await user.save();
	
	res.send(user)
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findByIdAndUpdate(req.params.id, { name: req.body.name, lastname: req.body.lastname }, {
    new: true
  });

  if (!user) return res.status(404).send('The user with the given ID was not found.');
  
  res.send(user);
});

module.exports = router; 

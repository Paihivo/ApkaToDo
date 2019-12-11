const { User } = require('../models/user');
const { Task, validate } = require('../models/task'); 
const express = require('express');
const router = express.Router();

// filtrowanie tasków dla danego użytkownika
// http://localhost:3000/api/task/5dec176c53f84a32306f4557/ <- id użytkownika
router.get('/:id/', async (req, res) => {
  const tasks = await Task.find().sort('-deadline')
  res.send(tasks.filter((task) => task.user._id == req.params.id))
});

router.post('/', async (req, res) => {
  const {error} = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findById(req.body.userId);
  if (!user) return res.status(400).send('Invalid user');

  let task = new Task({ 
    user: {
      _id: user._id,
      name: user.name,
      lastname: user.lastname,
      email: user.email
    },
    description: req.body.description, 
    deadline: req.body.deadline });
  
  task = await task.save();
  res.send(task)
});

router.get('/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) return res.status(400).send('Task with the given ID was not found.');
  res.send(task);
});

router.delete('/:id', async (req, res) => {
  const task = await Task.findByIdAndRemove(req.params.id);

  if (!task) return res.status(404).send('Task with the given ID was not found.');
  res.send(task);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const task = await Task.findByIdAndUpdate(req.params.id, { description: req.body.description }, {
    new: true
  });

  if (!task) return res.status(404).send('The task with the given ID was not found.');
  
  res.send(task);
});

module.exports = router;


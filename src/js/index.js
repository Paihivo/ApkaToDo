const mongoose = require('mongoose');
const Joi = require('joi');
const express = require('express');
const task = require('./routes/task')

const app = express();

mongoose.connect('mongodb://localhost/task')
  .then(()=> console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB.'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

app.use(express.json());
app.use('/api/task', task);
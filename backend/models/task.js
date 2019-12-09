const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const Task = mongoose.model('Task', new mongoose.Schema({
  user: {
    type: new mongoose.Schema({
      name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
        trim: true
      },
      lastname: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
        trim: true
      },
      email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        trim: true
      }
    }),
    required: true
  },
  description: {
    type: String,
    required: true,
    minlength: 3,
    maxlenght: 255,
    trim: true
  },
  deadline: {
    type: Date
  },
  created: {
    type: Date,
    default: new Date()
  },
  done: {
    type: Boolean,
    default: false
  }
}));

const validateTask = (task) => {
  const schema = {
    userId: Joi.objectId().required(),
    description: Joi.string().min(3).max(255).required(),
    deadline: Joi.date()
  };
  return Joi.validate(task, schema);
};

exports.Task = Task;
exports.validate = validateTask;
const mongoose = require('mongoose');
const Joi = require('joi');

const Task = mongoose.model('Task', new mongoose.Schema(
  {
    description: {
      type: String,
      required: true, 
      minlength: 3,
      maxlenght: 50
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
  }
));

const validateTask = (task) => {
  const schema = {
    description: Joi.string().min(3).max(50).required(),
    deadline: Joi.date()
  }
  return Joi.validate(task, schema);
}

exports.Task = Task;
exports.validate = validateTask;
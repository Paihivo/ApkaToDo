const mongoose= require('mongoose');
const Joi=require('joi');

const User = mongoose.model('User',new mongoose.Schema({
	  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
	trim: true
  },
  	  lastname: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
	trim: true
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
	trim: true
  }
  //{
	//  timestamps:true
  //}
})); 

function validateUser(user) {
  const schema = {
    name: Joi.string().min(5).max(50).required().trim(),
	lastname: Joi.string().min(5).max(50).required().trim(),
    email: Joi.string().min(5).max(255).required().email(), 
}
 return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
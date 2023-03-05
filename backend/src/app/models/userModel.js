const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  fName: {
    required: true,
    type: String,
  },
  lName: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: String,
    unique: true,
    minLength: 11,
    maxLength: 11
  },
  password: {
    required: true,
    type: String,
  },
})

const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel

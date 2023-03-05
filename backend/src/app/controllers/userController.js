const UserValidator = require('../validators/userValidator');
const UserModel = require('../models/userModel');
const _ = require('lodash');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
async function registerUser(req, res) {
  const obj = _.pick(req.body, ["fName", "lName", "phone", "password", "confirmPassword"])
  const validateResult = await UserValidator.registerValidator({ data: obj })
  if (!validateResult.success) {
    return res.status(422)
      .send({
        code: 422,
        data: validateResult.error.issues,
        message: "Unprocessable Entity",
        success: false,
      })
  }

  const hashedPassword = await bcrypt.hash(obj.password, config.get('salt'));
  obj.password = hashedPassword
  let user = await UserModel.findOne({ phone: obj.phone })
  if (user) {
    return res
      .status(400)
      .send({
        code: 400,
        message: "User was registered",
        success: false,
      })
  }
  user = await new UserModel(obj)
  const result = await user.save()
  res
    .status(200)
    .send({
      code: 200,
      data: _.pick(result, ["phone", "fName","lName", "_id"]),
      message: "User is created",
      success: true,
    })
}
async function loginUser(req, res) {
  const obj = _.pick(req.body, ["phone", "password"])
  const validateResult = await UserValidator.loginValidator({ data: obj })
  if (!validateResult.success) {
    return res.status(422)
      .send({
        code: 422,
        data: validateResult.error.issues,
        message: "Unprocessable Entity",
        success: false,
      })
  }
  // check user before registered?
  const user = await UserModel.findOne({ phone: obj.phone })
  if (!user) {
    return res
      .status(400)
      .send({
        code: 400,
        message: "User or password not found",
        success: false,
      })
  }
  const result = await bcrypt.compare(obj.password, user.password)
  if (!result) {
    return res
      .status(400)
      .send({
        code: 400,
        message: "User or password not found",
        success: false,
      })
  }
  const token = jwt.sign(_.pick(user, ["_id"]), config.get("myTokenSecretKey"), { expiresIn: '1h' })
  res
    .header(config.get("headerTokenName"), `Bearer ${token}`)
    .status(200)
    .send({
      code: 200,
      data: _.pick(user, ["phone", "fName", "lName", "_id"]),
      message: "User found",
      success: true,
    })
}
module.exports = {
  registerUser,
  loginUser
}
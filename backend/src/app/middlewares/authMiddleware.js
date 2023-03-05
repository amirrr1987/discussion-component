const config = require('config');
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const authHeader = req.header(config.get("headerTokenName"))
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res
      .status(401)
      .send({
        code: 401,
        message: "Access denied. No token provided.",
        success: false,
      })
  }
  try {
    const decoded = jwt.verify(token, config.get('myTokenSecretKey'));
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send({ message: 'Invalid token.' });
  }
}
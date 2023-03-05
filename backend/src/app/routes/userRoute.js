const express = require('express');
const router = express.Router();

const  userController = require('../controllers/userController');

router.post('/register', userController.registerUser)
router.post('/login', userController.loginUser)
// router.post('/', userController.createUser)
// router.delete('/', userController.deleteUsers)
// router.post('/:userId', userController.getUserById)
// router.put('/:userId', userController.updateUserById)
// router.delete('/:userId', userController.deleteUserById)

module.exports = router;
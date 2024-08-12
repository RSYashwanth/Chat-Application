const express = require('express');
const { getUsers, loginUser, registerUser } = require('../controllers/UserController');

const router = express.Router();

router.post('/login', loginUser);
router.post('/register', registerUser)
router.get('/users', getUsers);

module.exports = router;
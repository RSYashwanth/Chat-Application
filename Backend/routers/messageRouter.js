const express = require('express');
const { getAllMessages, deleteMessage } = require('../controllers/MessageController');

const router = express.Router();

router.get('/messages/:chatId', getAllMessages);
router.post('/messages/:messageId', deleteMessage);

module.exports = router;
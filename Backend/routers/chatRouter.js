const express = require('express');
const { getAllChats, createChat, deleteChat, searchChat } = require('../controllers/ChatController');

const router = express.Router();

router.get('/chats/:username', getAllChats);
router.post('/chats/new', createChat);
router.post('/chats/delete', deleteChat);
router.post('/chats/search', searchChat);

module.exports = router;    
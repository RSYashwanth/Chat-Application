const asyncHandler = require("express-async-handler");
const Message = require("../models/Message");

const getAllMessages = asyncHandler(async(req, res) => {
    const chatId = req.params.chatId;
    if(!chatId){
        res.status(400).json({error: 'all fields are required'});
        return;
    }
    if(chatId){
        const messages = await Message.find({chat: chatId});
        res.json(messages);
    }
    else{
        res.status(400);
    }
});

const deleteMessage = asyncHandler(async(req, res) => {
    const messageId = req.params.messageId;
    if(!messageId){
        res.status(400).json({error: 'all fields are required'});
        return;
    }
    await Message.findByIdAndDelete(messageId);
    res.status(200).json({msg: 'successfully deleted message'});
});

module.exports = { getAllMessages, deleteMessage };
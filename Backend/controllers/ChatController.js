const asyncHandler = require("express-async-handler");
const Chat = require("../models/Chat");
const User = require("../models/User");
const Message = require("../models/Message");
const queryBot = require("../openai/queryBot");

const getAllChats = asyncHandler(async(req, res) => {
    const username = req.params.username;
    if(username){
        const chats = await Chat.where({ users: username });
        res.json(chats);
    }
    else{
        res.status(400).json({error: 'all fields are required'});
    }
});

const createChat = asyncHandler(async(req, res) => {
    const { name, users } = req.body;
    if(name && users){
        const chat = await Chat.findOne({ name: name });
        if(chat){
            res.status(400).json({error: 'chat already exists'});
        }
        else{
            let isValid = true;
            for(let user of users){
                let dbUser = await User.findOne({username: user});
                if(!dbUser){
                    console.log(dbUser);
                    res.status(400).json({error: 'users dont already exist'});
                    isValid = false;
                }
            }
            if(isValid){
                await Chat.create({name: name, users: users});
                res.json({msg: 'Chat created succesfully'});
            }
        }
    }
    else{
        res.status(400).json({error: 'all fields are required'});
    }
});

const deleteChat = asyncHandler(async(req, res) => {
    const { name } = req.body;
    if(name){
        const chat = await Chat.findOne({ name: name });
        if(chat){
            await Chat.deleteOne({name: name});
            await Message.deleteMany({chat: name});
            res.json({msg: 'Chat deleted succesfully'});
        }
        else{
            res.status(400).json({error: 'Chat doesnt exist'});
        }
    }
    else{
        res.status(400).json({error: 'all fields are required'});
    }
});

const searchChat = asyncHandler(async(req, res) => {
    const { name, prompt } = req.body;
    if(prompt){
        let messages = '';
        let messageList = Message.find({chat: name});
        for await(message of messageList){
            messages += message.sender + ": " + message.message + " // ";
        }
        let processed = await queryBot.query(messages, prompt);
        if(processed)
            res.json({msg: processed});
        else
            res.status(400).json({error: 'chat appears to be empty'});
    }
    else{
        res.status(400).json({error: 'all fields are required'});
    }
});


module.exports = { getAllChats, createChat, deleteChat, searchChat };
const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    users: [{type: String, required: true}]
}, {collection: 'chats'});

module.exports = mongoose.model("Chat", chatSchema);
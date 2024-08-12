const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    sender: {type: String, required: true},
    chat: {type: String, requires: true},
    message: {type: String, required: true}
}, {collection: 'messages'});

module.exports = mongoose.model("Message", chatSchema);
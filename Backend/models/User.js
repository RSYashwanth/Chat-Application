const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
}, {collection: 'users'});

userSchema.methods.authPassword = async function authPassword(password){
    const authenticated = await bcrypt.compare(password, this.password);
    return authenticated;
}

module.exports = mongoose.model("User", userSchema);
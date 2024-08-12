const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const { generateToken } = require('../authentication/jwt');
const bcrypt = require("bcrypt");

const getUsers = asyncHandler(async(req, res) => {
    const users = await User.find();
    res.send(users);
});

const loginUser = asyncHandler(async(req, res) => {
    const { username, password } = req.body;
    if(!username || !password){
        res.status(400).json({error: 'all fields are required'});
        return;
    }
    try{
        const user = await User.findOne({ username: username });
        if(user){
            isValidPass = await user.authPassword(password);
            if(isValidPass){
                const token = await generateToken(user._id, user.username);
                res.json({token: token});
            }
            else{
                res.status(401).json({error: 'invalid password'});
            }
        }
        else{
            res.status(404).json({error: 'user not found'});
        }
    }catch(e){
        res.status(500).json({error: "server side error"});
        console.log(e);
    }
});

const registerUser = asyncHandler(async(req, res) => {
    const { username, password, email } = req.body;
    if(!username || !password || !email){
        res.status(400).json({error: 'all fields are required'});
        return;
    }
    try{
        const user = await User.findOne({ username: username });
        if(user){
            res.status(404).json({error: 'user already exists'});
        }
        else{
            hashedPass = await bcrypt.hash(password, 10);
            await User.create({username: username, password: hashedPass, email: email});
            res.json({msg: 'user registered succesfully'});
        }
    }catch(e){
        res.status(500).json({error: "server side error"});
        console.log(e);
    }
});

module.exports = {getUsers, loginUser, registerUser};
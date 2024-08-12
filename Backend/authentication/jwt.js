const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const secretKey = "randomSecretKey";

const generateToken = asyncHandler(async(id, username) => {
  return await jwt.sign({sub: id, name: username}, secretKey, { expiresIn: 60*15 });
});

const validateToken = asyncHandler(async(token) => {
    try{
        return await jwt.verify(token, secretKey)
    } catch (e) {
        return false;
    }
});

module.exports = {generateToken, validateToken};
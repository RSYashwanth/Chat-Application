const http  = require("http");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const WebSocket = require('ws');
const { validateToken } = require('./authentication/jwt');
const url = require('url');
const Message = require("./models/Message");

const userRouter = require("./routers/userRouter");
const chatRouter = require("./routers/chatRouter");
const messageRouter = require("./routers/messageRouter");
const Chat = require("./models/Chat");

mongoose.connect("mongodb://db:27017/chatdb");

const app = express();

const server = http.createServer(app);

app.use(express.json());
app.use(cors());

app.use('/api', userRouter);
app.use('/api', chatRouter);
app.use('/api', messageRouter);

const wss = new WebSocket.Server({ server: server, path: '/ws' });

let wsClients = [];

wss.on('connection', async(ws, req) => {

    let token = url.parse(req.url, true).query.token;
    decoded = await validateToken(token);
    if (decoded) {
        wsUsername = decoded.name;
        wsClients[wsUsername] = ws;
    } 
    else {
        ws.close();
    }

    ws.on('message', async (message) => {

        if(! await validateToken(token)){
            ws.close();
        }
        const recieved = JSON.parse(message);
        if(recieved.message){
            message = await Message.create(recieved);

            let chat = await Chat.findOne({name: recieved.chat});
            chat.users.forEach((username) => {
                client = wsClients[username];
                if (client && client.readyState === WebSocket.OPEN) {
                    message._id = message._id.toHexString();
                    client.send(JSON.stringify(message));
                }
            });
        }
    });

    ws.on('close', () => {
        //console.log('WebSocket client disconnected');
    });
});

server.listen(8081, () => {
    console.log("Server listening on port: 8081.");
});



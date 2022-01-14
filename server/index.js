const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {  
  cors: {    
    origin: "https://vigorous-nightingale-bba308.netlify.app",    
    methods: ["GET", "POST"]  
  }
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
    });

    socket.on('chat message', (msg) => {
      io.sockets.emit('chat message', msg);
    });
});

server.listen(22222, () => {
  console.log('listening on *:22222');
});
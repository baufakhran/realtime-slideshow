const express = require('express')
const app = express();
const http = require('http')
const server = http.createServer(app);
const io = require('socket.io')(server);
const cors = require('cors');

app.use(cors());
io.on('connection', socket => {
  socket.on('nextSlide', slide => {
    io.emit('changeSlide', slide);
  });

  socket.on('prevSlide', slide => {
    io.emit('changeSlide', slide);
  });
});

server.listen(3000, function () {
  console.log('listening on *:3000');
});

const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const { Server } = require('socket.io');
const chatRoutes = require('./routes/api/chat');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/chatDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Socket.io connections
io.on('connection', socket => {
  console.log('User connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('message', message => {
    io.emit('message', message);
  });
});

// API routes
app.use('/api/chat', chatRoutes);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");
const { Server } = require("socket.io");
const chatRoutes = require("./routes/api/chat");

const User = require("./models/User");
const Chat = require("./models/Chat");
const app = express();

//middleware
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Socket.io connection setup
io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Listen for 'message' event from the client
  socket.on("message", async (data) => {
    console.log("Received message:", data);

    // Find the user by username or create a new user if not exists
    let user = await User.findOne({ username: data.sender });
    if (!user) {
      user = new User({ username: data.sender, userId: uuidv4() });
      await user.save();
    }
    console.log(user);
    // Save message to MongoDB
    const chat = new Chat({
      sender: user._id,
      message: data.message,
    });
    await chat.save();

    // Broadcast the message to all connected clients
    socket.broadcast.emit("message", data);
  });

  // Disconnect event
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

// API routes
app.use("/api/chat", chatRoutes);

server.listen(3000, () => {
  console.log(`Server is running`);
});

const express = require('express');
const router = express.Router();
const Chat = require('../../models/Chat');

// POST: Send a new message
router.post('/', async (req, res) => {
  try {
    const newMessage = new Chat({ message: req.body.message, sender: req.body.sender });
    await newMessage.save();
    res.json(newMessage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

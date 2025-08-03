const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Gemini API config
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const MODEL = 'gemini-pro'; // ✅ Correct model name
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${GEMINI_API_KEY}`;

// Route to handle chat messages
app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  try {
    const response = await axios.post(GEMINI_API_URL, {
      contents: [
        {
          role: "user",
          parts: [{ text: userMessage }]
        }
      ]
    });

    const reply = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!reply) {
      return res.status(500).json({ error: 'No reply from Gemini.' });
    }

    res.json({ reply });
  } catch (error) {
    console.error("❌ Error fetching from Gemini:");
    console.error("Status:", error.response?.status);
    console.error("Data:", error.response?.data);
    res.status(500).json({ error: 'Failed to fetch response from Gemini.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

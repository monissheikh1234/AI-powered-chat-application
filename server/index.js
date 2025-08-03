const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Gemini API configuration
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const MODEL = "models/gemini-1.5-flash-latest";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/${MODEL}:generateContent?key=${GEMINI_API_KEY}`;

// Health check
app.get("/", (req, res) => {
  res.send("✅ Gemini Chat Backend is running");
});

// Chat route
app.post("/api/chat", async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ error: "Message is required." });
  }

  try {
    const response = await axios.post(GEMINI_API_URL, {
      contents: [
        {
          parts: [{ text: userMessage }],
          role: "user",
        },
      ],
    });

    const reply =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No reply.";

    res.json({ reply });
  } catch (error) {
    console.error("❌ Gemini API error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch response from Gemini." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});

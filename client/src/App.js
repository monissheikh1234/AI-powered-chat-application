import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setChat((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await axios.post(
        "https://ai-powered-chat-application-backend.onrender.com/api/chat",
        { message: input }
      );
      const botMessage = { sender: "bot", text: res.data.reply };
      setChat((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Error sending message:", err);
      const errorMessage = {
        sender: "bot",
        text: "⚠️ Server error. Try again later.",
      };
      setChat((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>✨ Gemini AI Chat</h1>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      <div className="chat-box">
        {chat.map((msg, i) => (
          <div key={i} className={`chat-message ${msg.sender}`}>
            <strong>{msg.sender === "user" ? "You" : "Gemini"}:</strong>{" "}
            {msg.text}
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask something..."
        />
        <button onClick={sendMessage}>➤</button>
      </div>
    </div>
  );
}

export default App;

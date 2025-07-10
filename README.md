# 💬 AI-Powered Chat Application (Gemini)

This is a full-stack AI-powered chat application built using **Node.js**, **React**, and **Google's Gemini API**. It enables real-time chat with an intelligent AI assistant, providing a seamless, modern interface for natural language conversations.

## 🚀 Features

- 🔥 Chat interface powered by **Gemini AI**
- 🌐 Full-stack app with separate **client** and **server**
- 📡 Communicates via REST APIs
- 📦 Modern UI with **React.js**
- 🌱 Environment-safe config with `.env` files
- 🧠 Scalable and easy to extend (can integrate with other models too)

## 📁 Project Structure
AI_CHAT_APP_GEMINI_NEW/
├── client/ # React Frontend
│ ├── public/
│ ├── src/
│ │ ├── App.js
│ │ ├── index.js
│ │ └── App.css
│ ├── package.json
│ └── .gitignore
│
├── server/ # Node.js Backend
│ ├── index.js
│ ├── .env
│ ├── package.json
│
├── README.md



## 🛠️ Tech Stack

- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js
- **AI API**: Google Gemini API
- **Environment Variables**: `.env`
- **Version Control**: Git & GitHub

## Project Demo:
https://github.com/user-attachments/assets/f15a5c09-2922-4d00-ba12-d71539917299


## ⚙️ Setup Instructions

### 1. Clone the repository
git clone https://github.com/monissheikh1234/AI-powered-chat-application.git
cd AI-powered-chat-application


### 2. Install dependencies
cd client
npm install

cd ../server
npm install


### 3.Create .env file in server/
GEMINI_API_KEY=your_google_gemini_api_key_here
PORT=5000


### 4. Run the app
Start backend:
cd server
node index.js

Start frontend:
cd client
npm start



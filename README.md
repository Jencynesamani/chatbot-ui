# 🤖 OpenAI Chatbot – React Frontend (Chatbot UI)

## Project Title
**Conversational AI Chatbot using React (Frontend) and Flask + OpenAI (Backend)**

---

## 📌 Project Overview
This project is the **React-based frontend UI** for a Conversational AI Chatbot system.  
It allows users to interact with an AI chatbot through a modern web interface built using **React**.

The chatbot logic itself **does NOT live in React**.  
React acts as a **client** that communicates with a **Flask backend API**, which then connects to the **OpenAI API**.

This project is part of the course **Designing Conversational AI**.

---

## 🧠 System Architecture
Browser → React UI → Flask API → OpenAI API → Flask → React UI

---

## 🎯 Learning Objectives
- Understand React component structure
- Learn state management using useState
- Communicate with backend APIs using fetch
- Build real-world AI-powered web interfaces

---

## 🛠️ Technologies Used
Frontend:
- React (Create React App)
- JavaScript (ES6)
- HTML5
- CSS3

Backend (separate project):
- Python
- Flask
- OpenAI API

---

## 📂 Project Directory Structure
```
chatbot-ui/
│
├── public/
│   └── index.html
│
├── src/
│   ├── App.js
│   ├── ChatApp.jsx
│   ├── ChatApp.css
│   ├── index.js
│   ├── index.css
│
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation & Setup

### Step 1: Navigate to project
```
cd chatbot-ui
```

### Step 2: Install dependencies
```
npm install
```

### Step 3: Start React app
```
npm start
```

Open http://localhost:3000

---

## 🔌 Backend Requirement
Flask backend must be running on:
http://localhost:5000/chat

Run backend using:
```
python Flask_API_For_React.py
```

---

## ▶️ Available Scripts
- npm start – Run development server
- npm run build – Production build

---

## 🚀 Future Enhancements
- Chat history UI
- Authentication
- Deployment (Netlify / Vercel)

---

## 👨‍💻 Author
**Nischal Aremanda**  
GitHub: https://github.com/nischalare  

---

## 📄 License
Educational use under **Sparktales Learning Solutions Pvt Ltd**

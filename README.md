# Chat Website

A basic real-time anonymous chat platform built with React, Django, and Express.js. This project demonstrates WebSocket-based communication and basic user authentication.

## 🔧 Tech Stack

- **Frontend**: React.js  
- **Authentication Backend**: Express.js (Node.js)  
- **WebSocket Backend**: Django 

## 📌 Features

- Basic anonymous chat functionality using WebSockets.
- User authentication handled by Express.js.
- Real-time communication without storing chat history.
- Clean and responsive UI using React.
- Separation of concerns between authentication and messaging logic.

---
<img width="1919" height="904" alt="image" src="https://github.com/user-attachments/assets/1bc63f39-cf2b-437d-b3e3-682da3588741" />

---

## 🗂 Folder Structure
Chat-Website/
├── Exbackend/           # Express.js backend for Authentication
├── chatweb/             # Django backend (WebSocket/chat logic)
├── frontend/            # React frontend (UI and WebSocket handling)
├── README.md            
├── package.json         

## 🚀 Setup

### Instructions - 
```bash
git clone https://github.com/Prerit-Bhagat/Chat-Website.git
cd Chat-Website

## Start Express.js Authentication Backend
cd Exbackend
npm install
node index.js

## Start Django WebSocket Chat Backend
cd ../chatweb
pip install -r requirements.txt
python manage.py runserver

## Start React Frontend
cd ../frontend
npm install
npm run dev

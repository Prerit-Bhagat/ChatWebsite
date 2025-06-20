// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import React from "react";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/joinroom" element={<Home />} />
        <Route path="/chat/:roomName" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;

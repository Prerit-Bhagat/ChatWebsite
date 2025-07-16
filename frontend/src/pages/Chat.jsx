// import { useEffect, useRef, useState } from "react";
// import { useParams } from "react-router-dom";
// import Navbar from "../components/Navbar";

// function Chat() {
//   const { roomName } = useParams();
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const ws = useRef(null);

//   useEffect(() => {
//     ws.current = new WebSocket(`ws://localhost:8000/ws/chat/${roomName}/`);

//     ws.current.onopen = () => {
//       console.log("WebSocket connected");
//     };

//     ws.current.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       setMessages((prev) => [...prev, `${data.user}: ${data.message}`]);
//     };

//     ws.current.onclose = () => {
//       console.log("WebSocket disconnected");
//     };

//     return () => {
//       ws.current.close();
//     };
//   }, [roomName]);

//   const sendMessage = () => {
//     if (input.trim()) {
//       ws.current.send(JSON.stringify({ message: input }));
//       setInput("");
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//         <h2>Chat Room: {roomName}</h2>

//         <div
//           style={{
//             border: "1px solid black",
//             height: "300px",
//             overflowY: "scroll",
//             marginBottom: "10px",
//             padding: "10px",
//             backgroundColor: "#fff",
//             color: "#000",
//           }}
//         >
//           {messages.map((msg, index) => (
//             <div key={index}>{msg}</div>
//           ))}
//         </div>

//         <div style={{ display: "flex" }}>
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Type a message"
//             style={{
//               flex: 1,
//               padding: "8px",
//               border: "1px solid black",
//               borderRight: "none",
//               outline: "none",
//             }}
//           />
//           <button
//             onClick={sendMessage}
//             style={{
//               padding: "8px 16px",
//               backgroundColor: "#000",
//               color: "#fff",
//               border: "1px solid black",
//               cursor: "pointer",
//             }}
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Chat;
// src/pages/Chat.jsx
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Chat() {
  const { roomName } = useParams();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket(`ws://localhost:8000/ws/chat/${roomName}/`);

    ws.current.onopen = () => {
      console.log("WebSocket connected");
      toast.success(`Joined room: ${roomName}`);
    };

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prev) => [...prev, { user: data.user, text: data.message }]);
    };

    ws.current.onclose = () => {
      console.log("WebSocket disconnected");
      toast.info("You have left the chat");
    };

    ws.current.onerror = () => {
      toast.error("WebSocket error");
    };

    return () => {
      ws.current.close();
    };
  }, [roomName]);

  const sendMessage = () => {
    if (!input.trim()) return;
    ws.current.send(JSON.stringify({ message: input }));
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-1 p-6 overflow-hidden">
        <h2 className="text-2xl font-semibold mb-4">
          Chat Room: <span className="text-coral">{roomName}</span>
        </h2>

        <div className="flex-1 bg-white rounded-lg shadow-inner p-4 overflow-y-auto mb-4">
          {messages.map((msg, idx) => (
            <div key={idx} className="mb-2 text-gray-800">
              <span className="font-bold">{msg.user}:</span>{" "}
              <span>{msg.text}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-teal"
          />
          <button
            onClick={sendMessage}
            className="flex items-center gap-2 bg-coral hover:bg-coral/90 text-white px-4 py-2 rounded-lg transition"
          >
            Send <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
}

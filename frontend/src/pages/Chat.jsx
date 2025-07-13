import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function Chat() {
  const { roomName } = useParams();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket(`ws://localhost:8000/ws/chat/${roomName}/`);

    ws.current.onopen = () => {
      console.log("WebSocket connected");
    };

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prev) => [...prev, `${data.user}: ${data.message}`]);
    };

    ws.current.onclose = () => {
      console.log("WebSocket disconnected");
    };

    return () => {
      ws.current.close();
    };
  }, [roomName]);

  const sendMessage = () => {
    if (input.trim()) {
      ws.current.send(JSON.stringify({ message: input }));
      setInput("");
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h2>Chat Room: {roomName}</h2>

        <div
          style={{
            border: "1px solid black",
            height: "300px",
            overflowY: "scroll",
            marginBottom: "10px",
            padding: "10px",
            backgroundColor: "#fff",
            color: "#000",
          }}
        >
          {messages.map((msg, index) => (
            <div key={index}>{msg}</div>
          ))}
        </div>

        <div style={{ display: "flex" }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            style={{
              flex: 1,
              padding: "8px",
              border: "1px solid black",
              borderRight: "none",
              outline: "none",
            }}
          />
          <button
            onClick={sendMessage}
            style={{
              padding: "8px 16px",
              backgroundColor: "#000",
              color: "#fff",
              border: "1px solid black",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default Chat;

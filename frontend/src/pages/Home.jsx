import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  const [roomName, setRoomName] = useState("");
  const navigate = useNavigate();

  const handleJoin = async () => {
    if (roomName.trim()) {
      try {
        const res = await fetch("http://localhost:8000/joinroom/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ roomname: roomName }),
        });

        if (res.ok) {
          navigate(`/chat/${roomName}`);
        } else {
          const data = await res.json();
          alert(data.error || "Failed to join room");
        }
      } catch (error) {
        alert("Network error");
        console.error(error);
      }
    } else {
      alert("Please enter a room name.");
    }
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <h2>Join a Chat Room</h2>
        <input
          type="text"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          placeholder="Enter room name"
          style={{
            padding: "8px",
            width: "200px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <button
          onClick={handleJoin}
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Join
        </button>
      </div>
    </>
  );
}

export default Home;

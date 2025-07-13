// src/components/Navbar.jsx
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:4000/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );
      navigate("/signin");
    } catch (error) {
      alert("Logout failed!");
      console.error(error);
    }
  };

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>ChatApp</h2>
      <button onClick={handleLogout} style={styles.button}>
        Sign Out
      </button>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#222",
    color: "white",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    margin: 0,
    fontSize: "20px",
  },
  button: {
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Navbar;

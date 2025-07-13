import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Landing = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login status on mount
  useEffect(() => {
    axios
      .get("http://localhost:4000/auth/checkLogin", {
        withCredentials: true,
      })
      .then(() => setIsLoggedIn(true))
      .catch(() => setIsLoggedIn(false));
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:4000/auth/logout",
        {},
        { withCredentials: true }
      );
      setIsLoggedIn(false);
      navigate("/login");
    } catch (error) {
      alert("Logout failed");
      console.error(error);
    }
  };

  return (
    <div>
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>ChatApp</h2>
        <div>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
          <Link to="/joinroom" style={styles.navLink}>
            Join Chat
          </Link>
          {isLoggedIn ? (
            <button onClick={handleLogout} style={styles.logoutBtn}>
              Logout
            </button>
          ) : (
            <Link to="/login" style={styles.navLink}>
              Login
            </Link>
          )}
        </div>
      </nav>
      <div style={styles.container}>
        <h1 style={styles.heading}>Welcome to ChatApp</h1>
        <p style={styles.subtext}>
          Join any chat room and start talking instantly.
        </p>
        <Link to="/joinroom">
          <button style={styles.button}>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

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
  navLink: {
    color: "white",
    marginLeft: "15px",
    textDecoration: "none",
    fontSize: "16px",
  },
  logoutBtn: {
    marginLeft: "15px",
    background: "#f44336",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "4px",
  },
  container: {
    padding: "60px 20px",
    textAlign: "center",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "20px",
  },
  subtext: {
    fontSize: "18px",
    marginBottom: "30px",
  },
  button: {
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

export default Landing;

import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>ChatApp</h2>
        <div>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
          <Link to="/joinroom" style={styles.navLink}>
            Join Chat
          </Link>
        </div>
      </nav>

      {/* Main Landing Content */}
      <div style={styles.container}>
        <h1 style={styles.heading}>Welcome to ChatApp</h1>
        <p style={styles.subtext}>
          Join any chat room and start talking instantly.
        </p>
        <Link to="/home">
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
  },
  navLink: {
    color: "white",
    marginLeft: "15px",
    textDecoration: "none",
    fontSize: "16px",
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

export default LandingPage;

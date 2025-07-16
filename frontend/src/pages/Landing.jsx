// src/pages/Landing.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import {
  FaSignInAlt,
  FaUserPlus,
  FaArrowRight,
  FaSignOutAlt,
  FaCommentDots,
} from "react-icons/fa";
import AvatarGrid from "../components/Avatar";

export default function Landing() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login status on mount
  useEffect(() => {
    axios
      .get("http://localhost:4000/auth/checkLogin", { withCredentials: true })
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
      toast.success("Logged out successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Logout failed");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
        <h2
          className="text-2xl font-bold cursor-pointer flex items-center gap-2"
          onClick={() => navigate("/")}
        >
          <FaCommentDots /> ChatApp
        </h2>
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:text-gray-300 flex items-center gap-1">
            <FaSignInAlt /> Home
          </Link>
          <Link
            to="/joinroom"
            className="hover:text-gray-300 flex items-center gap-1"
          >
            <FaArrowRight /> Join Chat
          </Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-1 bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded transition"
            >
              <FaSignOutAlt /> Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-1 bg-coral px-3 py-1.5 rounded hover:bg-coral/90 transition"
            >
              <FaSignInAlt /> Login
            </Link>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 px-8 flex flex-col items-center text-center">
        <h1 className="mt-12 text-5xl font-extrabold leading-tight max-w-3xl">
          <span className="text-coral">Text</span> anonymously{" "}
          <span className="text-teal">easy</span>
          <br />
          with <span className="text-coral">friends and others</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          ChatApp lets you chat anonymously with anyone, anytime — no names, no
          pressure. Conversations stay private, spontaneous, and completely in
          your control.
        </p>

        <button
          onClick={() => {
            if (isLoggedIn) {
              navigate("/");
            } else {
              toast.info("Please sign up or log in first.");
              navigate("/signup");
            }
          }}
          className="mt-8 px-6 py-3 bg-coral text-white font-medium rounded-lg hover:bg-coral/90 flex items-center gap-2 transition"
        >
          Get Started <FaArrowRight />
        </button>

        {/* Illustration Grid */}
        <AvatarGrid />
      </main>
    </div>
  );
}

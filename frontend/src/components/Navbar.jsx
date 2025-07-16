// // src/components/Navbar.jsx
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function Navbar() {
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await axios.post(
//         "http://localhost:4000/auth/logout",
//         {},
//         {
//           withCredentials: true,
//         }
//       );
//       navigate("/signin");
//     } catch (error) {
//       alert("Logout failed!");
//       console.error(error);
//     }
//   };

//   return (
//     <nav style={styles.navbar}>
//       <h2 style={styles.logo}>ChatApp</h2>
//       <button onClick={handleLogout} style={styles.button}>
//         Sign Out
//       </button>
//     </nav>
//   );
// }

// const styles = {
//   navbar: {
//     backgroundColor: "#222",
//     color: "white",
//     padding: "10px 20px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   logo: {
//     margin: 0,
//     fontSize: "20px",
//   },
//   button: {
//     backgroundColor: "#f44336",
//     color: "#fff",
//     border: "none",
//     padding: "8px 14px",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
// };

// export default Navbar;
// src/components/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaSignInAlt,
  FaUserPlus,
  FaArrowRight,
  FaSignOutAlt,
  FaCommentDots,
} from "react-icons/fa";
import { toast } from "react-toastify";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:4000/auth/logout",
        {},
        { withCredentials: true }
      );
      toast.success("Logged out successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Logout failed!");
      console.error(error);
    }
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h2
        className="text-2xl font-bold cursor-pointer flex items-center gap-2"
        onClick={() => navigate("/")}
      >
        <FaCommentDots /> ChatApp
      </h2>
      <div className="flex items-center gap-4">
        <div>
          <Link to="/" className="hover:text-gray-300 flex items-center gap-1">
            <FaSignInAlt /> Home
          </Link>
        </div>
        <button
          onClick={handleLogout}
          className="flex  items-center gap-2 bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded"
        >
          <FaSignOutAlt /> Sign Out
        </button>
      </div>
    </nav>
  );
}

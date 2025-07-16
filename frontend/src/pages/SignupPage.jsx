// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";

// const SignupPage = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     fullName: "",
//     email: "",
//     password: "",
//     phoneNumber: "",
//   });
//   const navigate = useNavigate();
//   const [error, setError] = useState("");

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:4000/auth/signup", formData, {
//         withCredentials: true,
//       });
//       navigate("/login");
//     } catch (err) {
//       setError(err.response?.data?.message || "Signup failed");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Sign Up</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input
//           name="username"
//           placeholder="Username"
//           onChange={handleChange}
//           style={styles.input}
//         />
//         <input
//           name="fullName"
//           placeholder="Full Name"
//           onChange={handleChange}
//           style={styles.input}
//         />
//         <input
//           name="email"
//           type="email"
//           placeholder="Email"
//           onChange={handleChange}
//           style={styles.input}
//         />
//         <input
//           name="password"
//           type="password"
//           placeholder="Password"
//           onChange={handleChange}
//           style={styles.input}
//         />
//         <input
//           name="phoneNumber"
//           placeholder="Phone Number"
//           onChange={handleChange}
//           style={styles.input}
//         />
//         <button type="submit" style={styles.button}>
//           Sign Up
//         </button>
//       </form>
//       <p>
//         Already have an account? <Link to="/login">Login</Link>
//       </p>
//     </div>
//   );
// };

// const styles = {
//   container: { padding: "50px 20px", textAlign: "center" },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     maxWidth: "300px",
//     margin: "0 auto",
//   },
//   input: { padding: "10px", margin: "10px 0" },
//   button: {
//     padding: "10px",
//     backgroundColor: "#000",
//     color: "#fff",
//     border: "none",
//     cursor: "pointer",
//   },
// };

// export default SignupPage;

// src/pages/SignupPage.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FaUser,
  FaIdBadge,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaArrowRight,
} from "react-icons/fa";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/auth/signup", formData, {
        withCredentials: true,
      });
      toast.success("Account created! Redirecting to login…");
      navigate("/login");
    } catch (err) {
      const msg = err.response?.data?.message || "Signup failed";
      setError(msg);
      toast.error(msg);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="w-full max-w-md space-y-6">
        <h2 className="text-3xl font-extrabold text-center">
          Create your account
        </h2>
        {error && (
          <div className="text-red-600 text-center">
            <p>{error}</p>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center border border-gray-300 rounded px-3 py-2">
            <FaUser className="text-gray-400 mr-2" />
            <input
              name="username"
              placeholder="Username"
              onChange={handleChange}
              className="w-full outline-none"
              required
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded px-3 py-2">
            <FaIdBadge className="text-gray-400 mr-2" />
            <input
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full outline-none"
              required
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded px-3 py-2">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full outline-none"
              required
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded px-3 py-2">
            <FaLock className="text-gray-400 mr-2" />
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full outline-none"
              required
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded px-3 py-2">
            <FaPhone className="text-gray-400 mr-2" />
            <input
              name="phoneNumber"
              placeholder="Phone Number"
              onChange={handleChange}
              className="w-full outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-coral text-white py-3 rounded-lg font-medium hover:bg-coral/90 transition"
          >
            Sign Up <FaArrowRight />
          </button>
        </form>
        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-coral hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

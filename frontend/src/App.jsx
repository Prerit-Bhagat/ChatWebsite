// // // src/App.jsx
// // import React from 'react'
// // import { BrowserRouter as Router, Routes, Route, useLocation, Outlet } from 'react-router-dom'
// // import { ToastContainer } from 'react-toastify'
// // import 'react-toastify/dist/ReactToastify.css'

// // import Navbar from './components/Navbar'
// // import Home from './pages/Home'
// // import Chat from './pages/Chat'
// // import Landing from './pages/Landing'
// // import Login from './pages/LoginPage'
// // import Signup from './pages/SignupPage'
// // import ProtectedRoute from './components/ProtectedRoute'

// // /**
// //  * Layout component that conditionally shows the Navbar
// //  */
// // function Layout() {
// //   const location = useLocation()
// //   // hide Navbar on these public paths
// //   const publicPaths = ['/', '/login', '/signup']
// //   const showNavbar = !publicPaths.includes(location.pathname)

// //   return (
// //     <>
// //       {showNavbar && <Navbar />}
// //       <Outlet />
// //     </>
// //   )
// // }

// // export default function App() {
// //   return (
// //     <Router>
// //       {/* ToastContainer only needs to be added once */}
// //       <ToastContainer
// //         position="top-right"
// //         autoClose={3000}
// //         hideProgressBar={false}
// //         newestOnTop
// //         closeOnClick
// //         pauseOnHover
// //       />

// //       <Routes>
// //         {/* Wrap everything in our Layout */}
// //         <Route element={<Layout />}>
// //           {/* Public routes */}
// //           <Route path="/" element={<Landing />} />
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/signup" element={<Signup />} />

// //           {/* Protected routes: Navbar will show automatically here */}
// //           <Route
// //             path="/joinroom"
// //             element={
// //               <ProtectedRoute>
// //                 <Home />
// //               </ProtectedRoute>
// //             }
// //           />
// //           <Route
// //             path="/chat/:roomName"
// //             element={
// //               <ProtectedRoute>
// //                 <Chat />
// //               </ProtectedRoute>
// //             }
// //           />
// //         </Route>
// //       </Routes>
// //     </Router>
// //   )
// // }
// // src/App.jsx
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
//   Outlet,
// } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Chat from "./pages/Chat";
// import Landing from "./pages/Landing";
// import Login from "./pages/LoginPage";
// import Signup from "./pages/SignupPage";
// import ProtectedRoute from "./components/ProtectedRoute";

// /**
//  * Layout component that conditionally shows the Navbar
//  */
// function Layout() {
//   const location = useLocation();
//   // hide Navbar on these public paths
//   const publicPaths = ["/", "/login", "/signup"];
//   const showNavbar = !publicPaths.includes(location.pathname);

//   return (
//     <>
//       {showNavbar && <Navbar />}
//       <Outlet />
//     </>
//   );
// }

// export default function App() {
//   return (
//     <Router>
//       {/* ToastContainer only needs to be added once */}
//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop
//         closeOnClick
//         pauseOnHover
//       />

//       <Routes>
//         {/* Wrap everything in our Layout */}
//         <Route element={<Layout />}>
//           {/* Public routes */}
//           <Route path="/" element={<Landing />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />

//           {/* Protected routes: Navbar will show automatically here */}
//           <Route
//             path="/joinroom"
//             element={
//               <ProtectedRoute>
//                 <Home />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/chat/:roomName"
//             element={
//               <ProtectedRoute>
//                 <Chat />
//               </ProtectedRoute>
//             }
//           />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }
// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Landing from "./pages/Landing";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Home from "./pages/Home";
import Chat from "./pages/Chat";

/**
 * Layout that shows Navbar only on authenticated routes.
 */
function AuthLayout() {
  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
    </>
  );
}

/**
 * Layout for public pages (no Navbar).
 */
function PublicLayout() {
  return <Outlet />;
}

export default function App() {
  return (
    <Router>
      <ToastContainer />

      <Routes>
        {/* Public pages */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>

        {/* Protected pages */}
        <Route
          element={
            <ProtectedRoute>
              <AuthLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/joinroom" element={<Home />} />
          <Route path="/chat/:roomName" element={<Chat />} />
        </Route>
      </Routes>
    </Router>
  );
}

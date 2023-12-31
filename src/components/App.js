import React from "react";
import Signup from "./Authentication/Signup.js";
import { AuthProvider } from "../context/AuthContext.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Authentication/Profile.js";
import ForgotPassword from "./Authentication/ForgotPassword.js";
import UpdateProfile from "./Authentication/UpdateProfile.js";
import PrivateRoute from "./Authentication/PrivateRoute.js";
import Login from "./Authentication/Login.js";
import Dashboard from "./drive/Dashboard.js";
import NavBar from "./drive/NavBar.js";

function App() {
  return (

        <Router>
          <AuthProvider>
          <NavBar />
            <Routes>
            {/* Drive */}
            <Route
                path="/"
                element={
                  <PrivateRoute>
                    {" "}
                    <Dashboard />
                  </PrivateRoute>
                }
              />

            <Route
                path="/folder/:folderId"
                element={
                  <PrivateRoute>
                    {" "}
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              
              {/* Profile  */}
              <Route
                path="/user"
                element={
                  <PrivateRoute>
                    {" "}
                    <Profile />
                  </PrivateRoute>
                }
              />

              <Route
                path="/update-profile"
                element={ 
                  <PrivateRoute>
                    {" "}
                    <UpdateProfile />
                  </PrivateRoute>
                }
              />
            {/* Auth */}
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </AuthProvider>
        </Router>
  );
}

export default App;

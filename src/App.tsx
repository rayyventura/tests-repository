import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/authContexts";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { AlertProvider } from "./contexts/alertContext";
import Alert from "./components/Alert";

export default function App() {
  return (
    <AlertProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
        <Alert />
      </AuthProvider>
    </AlertProvider>
  );
}

import * as React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <HeroUIProvider>
      <ToastProvider placement="top-right" />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </HeroUIProvider>
  );
}

export default App;
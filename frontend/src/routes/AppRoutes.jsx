import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
// import ForgotPassword from "../pages/ForgotPassword";
// import Dashboard from "../pages/Dashboard";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Redirect Root */}

        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        {/* Authentication */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* Uncomment after creating the page */}

        {/*
        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />
        */}

        {/* Dashboard */}

        {/*
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        */}

        {/* 404 */}

        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-700">
                  404
                </h1>

                <p className="mt-3 text-gray-500">
                  Page Not Found
                </p>
              </div>
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Dashboard from "../pages/dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

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

        <Route
        path="/dashboard"
        element={
        <ProtectedRoute>
        <Dashboard/>
        </ProtectedRoute>
        }
        />


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
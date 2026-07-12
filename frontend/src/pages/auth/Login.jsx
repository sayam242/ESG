import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowRight } from "lucide-react";

import AuthLayout from "../components/auth/AuthLayout";
import Input from "../components/auth/Input";
import PasswordInput from "../components/auth/PasswordInput";
import Button from "../components/auth/Button";

// import { login } from "../services/authService";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const [rememberMe, setRememberMe] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      console.log({
        ...formData,
        rememberMe,
      });

      // const response = await login(formData);

      // localStorage.setItem("token", response.data.token);

      // navigate("/dashboard");

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to continue to your EcoSphere account"
    >
      <form
        onSubmit={handleLogin}
        className="space-y-7"
      >
        {/* Email */}

        <Input
          label="Email address"
          name="email"
          type="email"
          placeholder="you@company.com"
          icon={<Mail size={18} />}
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Password */}

        <PasswordInput
          label="Password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {/* Remember + Forgot */}

        <div className="flex items-center justify-between">

          <label className="flex items-center gap-3 cursor-pointer">

            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() =>
                setRememberMe(!rememberMe)
              }
              className="h-4 w-4 rounded accent-black"
            />

            <span className="text-sm text-slate-700">
              Remember me
            </span>

          </label>

          <Link
            to="/forgot-password"
            className="text-sm font-medium text-green-600 hover:text-green-700"
          >
            Forgot password?
          </Link>

        </div>

        {/* Login Button */}

        <Button
          type="submit"
          loading={loading}
          className="justify-between px-8"
        >
          <span className="flex-1 text-center">
            Sign In
          </span>

          {!loading && (
            <ArrowRight size={22} />
          )}
        </Button>

        {/* Bottom */}

        <div className="pt-6 text-center">

          <span className="text-slate-500">

            Don't have an account?

          </span>

          <Link
            to="/signup"
            className="ml-2 font-semibold text-green-600 hover:text-green-700"
          >
            Create Account
          </Link>

        </div>

      </form>
    </AuthLayout>
  );
}
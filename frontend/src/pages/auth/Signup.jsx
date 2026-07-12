import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  BadgeCheck,
  Building2,
} from "lucide-react";

import { register } from "../../services/authService";

import AuthLayout from "../../components/auth/AuthLayout";
import Input from "../../components/auth/Input";
import PasswordInput from "../../components/auth/PasswordInput";
import Button from "../../components/auth/Button";

export default function Signup() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    employeeNo: "",
    firstName: "",
    lastName: "",
    email: "",
    departmentId: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      // Payload according to Employee model
      const payload = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
        employeeNo: formData.employeeNo.trim(),
        departmentId: formData.departmentId,
      };

      console.log("Signup Payload:", payload);

      const response = await register(payload);

      console.log("Register Response:", response.data);

      alert("Account created successfully!");

      navigate("/login");

    } catch (err) {
      console.error("Signup Error:", err);

      if (err.response) {
        console.log("Backend Response:", err.response.data);

        alert(
          err.response.data.message ||
            "Registration failed."
        );
      } else {
        alert(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join EcoSphere and start your ESG journey."
    >
      <form
        onSubmit={handleSignup}
        className="space-y-5"
      >
        {/* Employee Number */}

        <Input
          label="Employee Number"
          name="employeeNo"
          placeholder="EMP001"
          icon={<BadgeCheck size={18} />}
          value={formData.employeeNo}
          onChange={handleChange}
          required
        />

        {/* Name */}

        <div className="grid grid-cols-2 gap-4">

          <Input
            label="First Name"
            name="firstName"
            placeholder="John"
            icon={<User size={18} />}
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <Input
            label="Last Name"
            name="lastName"
            placeholder="Doe"
            icon={<User size={18} />}
            value={formData.lastName}
            onChange={handleChange}
            required
          />

        </div>

        {/* Email */}

        <Input
          label="Email Address"
          name="email"
          type="email"
          placeholder="john@company.com"
          icon={<Mail size={18} />}
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Department */}

        {/* Department */}

        <Input
          label="Department"
          name="departmentId"
          type="text"
          placeholder="Enter Department ID or Name"
          icon={<Building2 size={18} />}
          value={formData.departmentId}
          onChange={handleChange}
          required
        />

        {/* Password */}

        <PasswordInput
          label="Password"
          name="password"
          placeholder="Create password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {/* Confirm Password */}

        <PasswordInput
          label="Confirm Password"
          name="confirmPassword"
          placeholder="Re-enter password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        {/* Terms */}

        <div className="flex items-start gap-3">

          <input
            type="checkbox"
            required
            className="mt-1 h-4 w-4 accent-green-600"
          />

          <p className="text-sm text-slate-600 leading-6">
            I agree to the{" "}
            <span className="font-medium text-green-600 cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="font-medium text-green-600 cursor-pointer">
              Privacy Policy
            </span>.
          </p>

        </div>

        {/* Submit */}

        <Button
          type="submit"
          loading={loading}
        >
          Create Account
        </Button>

        {/* Bottom */}

        <div className="pt-6 text-center">

          <span className="text-slate-500">
            Already have an account?
          </span>

          <Link
            to="/login"
            className="ml-2 font-semibold text-green-600 hover:text-green-700"
          >
            Login
          </Link>

        </div>

      </form>
    </AuthLayout>
  );
}
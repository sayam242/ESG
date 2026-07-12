import { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  BadgeCheck,
  Building2,
} from "lucide-react";

import AuthLayout from "../components/auth/AuthLayout";
import Input from "../components/auth/Input";
import PasswordInput from "../components/auth/PasswordInput";
import Button from "../components/auth/Button";

// import { signup } from "../services/authService";

export default function Signup() {
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
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      console.log(formData);

      // await signup(formData);

      // navigate("/login");

    } catch (err) {
      console.log(err);
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
        {/* Employee ID */}

        <Input
          label="Employee Number"
          name="employeeNo"
          placeholder="EMP001"
          icon={<BadgeCheck size={18} />}
          value={formData.employeeNo}
          onChange={handleChange}
          required
        />

        {/* First & Last Name */}

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

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Department ID
          </label>

          <div className="relative">
            <Building2
              size={18}
              className="absolute left-4 top-4 text-gray-400"
            />

            <select
              name="departmentId"
              value={formData.departmentId}
              onChange={handleChange}
              className="w-full h-14 rounded-xl border border-gray-300 pl-12 pr-4 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none"
              required
            >
              <option value="">
                Select Department
              </option>

              {/* Replace with API Data */}

              <option value="1">
                Human Resources
              </option>

              <option value="2">
                Information Technology
              </option>

              <option value="3">
                Finance
              </option>

              <option value="4">
                Operations
              </option>

              <option value="5">
                Sustainability
              </option>

            </select>
          </div>
        </div>

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

          <p className="text-sm text-gray-600 leading-6">
            I agree to the{" "}
            <span className="text-green-600 font-medium cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-green-600 font-medium cursor-pointer">
              Privacy Policy
            </span>.
          </p>
        </div>

        {/* Signup Button */}

        <Button
          type="submit"
          loading={loading}
        >
          Create Account
        </Button>

        {/* Divider */}

        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>

          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm text-gray-500">
              Already registered?
            </span>
          </div>
        </div>

        {/* Login */}

        <Link to="/login">
          <Button variant="secondary">
            Login
          </Button>
        </Link>
      </form>

      {/* Footer */}

      <div className="mt-8 rounded-xl bg-blue-50 border border-blue-100 p-4">
        <h4 className="font-semibold text-blue-800">
          One Platform. Complete ESG Management.
        </h4>

        <p className="mt-2 text-sm text-blue-700 leading-6">
          Measure carbon emissions, organize CSR initiatives,
          manage governance policies, monitor compliance,
          and motivate employees through sustainability
          challenges and rewards.
        </p>
      </div>
    </AuthLayout>
  );
}
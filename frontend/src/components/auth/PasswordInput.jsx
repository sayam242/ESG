import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";

export default function PasswordInput({
  label,
  error,
  className = "",
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      {/* Label */}

      {label && (
        <label className="block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      {/* Password Input */}

      <div className="relative">
        {/* Lock Icon */}

        <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
          <Lock size={18} />
        </div>

        {/* Input */}

        <input
          {...props}
          type={showPassword ? "text" : "password"}
          className={`
            w-full
            h-14
            rounded-xl
            border
            bg-white
            pl-12
            pr-12
            text-slate-700
            placeholder:text-slate-400
            border-slate-300
            focus:outline-none
            focus:ring-2
            focus:ring-green-500
            focus:border-green-500
            transition-all
            duration-200
            disabled:bg-slate-100
            disabled:cursor-not-allowed
            ${
              error
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : ""
            }
            ${className}
          `}
        />

        {/* Eye Button */}

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-slate-700 transition-colors"
        >
          {showPassword ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>
      </div>

      {/* Error */}

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
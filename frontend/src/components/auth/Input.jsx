import React from "react";

export default function Input({
  label,
  icon,
  error,
  className = "",
  ...props
}) {
  return (
    <div className="space-y-2">
      {/* Label */}

      {label && (
        <label className="block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      {/* Input */}

      <div className="relative">
        {/* Icon */}

        {icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
            {icon}
          </div>
        )}

        <input
          {...props}
          className={`
            w-full
            h-14
            rounded-xl
            border
            bg-white
            px-4
            ${icon ? "pl-12" : ""}
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
            ${error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}
            ${className}
          `}
        />
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
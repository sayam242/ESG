import React from "react";
import { Loader2 } from "lucide-react";

export default function Button({
  children,
  type = "button",
  onClick,
  loading = false,
  disabled = false,
  variant = "primary",
  fullWidth = true,
  className = "",
}) {
  const baseClasses =
    "h-14 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-400",

    secondary:
      "bg-white border border-gray-300 text-slate-700 hover:bg-gray-50 focus:ring-gray-300",

    success:
      "bg-green-600 text-white hover:bg-green-700 focus:ring-green-400",

    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-400",
  };

  return (
    <button
  type={type}
  onClick={onClick}
  disabled={loading || disabled}
  className={`
    ${baseClasses}
    ${variants[variant]}
    ${fullWidth ? "w-full" : ""}
    ${(loading || disabled) ? "opacity-60 cursor-not-allowed" : ""}
    ${className}
  `}
>
  {loading ? (
    <>
      <Loader2 className="h-5 w-5 animate-spin" />
      Please wait...
    </>
  ) : (
    children
  )}
</button>
  );
}
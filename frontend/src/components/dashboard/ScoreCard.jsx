import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function ScoreCard({
  title,
  value,
  icon,
  iconBg = "bg-green-100",
  iconColor = "text-green-600",
  change = 0,
  changeType = "increase",
  subtitle = "",
}) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Top */}

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            {value}
          </h2>

          {subtitle && (
            <p className="mt-2 text-sm text-slate-400">
              {subtitle}
            </p>
          )}

        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${iconBg}`}
        >
          <div className={iconColor}>
            {icon}
          </div>
        </div>

      </div>

      {/* Bottom */}

      <div className="mt-8 flex items-center justify-between">

        <div
          className={`flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold
          ${
            changeType === "increase"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {changeType === "increase" ? (
            <ArrowUpRight size={16} />
          ) : (
            <ArrowDownRight size={16} />
          )}

          {change}%
        </div>

        <span className="text-sm text-slate-400">
          vs last month
        </span>

      </div>

    </div>
  );
}
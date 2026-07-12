import { MoreHorizontal } from "lucide-react";

export default function SectionHeader({
  title,
  subtitle,
  action,
  showMore = false,
}) {
  return (
    <div className="mb-6 flex items-start justify-between">

      {/* Left */}

      <div>

        <h2 className="text-xl font-bold text-slate-900">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-1 text-sm text-slate-500">
            {subtitle}
          </p>
        )}

      </div>

      {/* Right */}

      <div className="flex items-center gap-3">

        {action}

        {showMore && (
          <button
            className="
              rounded-xl
              p-2
              text-slate-500
              transition
              hover:bg-slate-100
              hover:text-slate-800
            "
          >
            <MoreHorizontal size={20} />
          </button>
        )}

      </div>

    </div>
  );
}
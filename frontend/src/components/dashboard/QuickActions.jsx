import { Plus, Trophy, FileText, ChevronRight } from "lucide-react";

const actions = [
  {
    label: "Log Carbon Data",
    icon: Plus,
    bg: "bg-green-600 hover:bg-green-700",
  },
  {
    label: "Start Challenge",
    icon: Trophy,
    bg: "bg-orange-500 hover:bg-orange-600",
  },
  {
    label: "View Reports",
    icon: FileText,
    bg: "bg-slate-700 hover:bg-slate-800",
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-lg font-semibold text-slate-900">
        Quick Actions
      </h2>

      <div className="space-y-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.label}
              className={`flex w-full items-center justify-between rounded-xl px-5 py-4 text-sm font-semibold text-white transition ${action.bg}`}
            >
              <div className="flex items-center gap-3">
                <Icon size={18} />
                {action.label}
              </div>
              <ChevronRight size={18} className="opacity-80" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

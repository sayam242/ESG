import {
  CheckCircle2,
  AlertTriangle,
  Leaf,
  ShieldCheck,
} from "lucide-react";

const activities = [
  {
    id: 1,
    text: "Priya completed 'Zero Waste Week'",
    time: "2h ago",
    icon: CheckCircle2,
    color: "text-green-600",
  },
  {
    id: 2,
    text: "New compliance issue in Logistics",
    time: "5h ago",
    icon: AlertTriangle,
    color: "text-orange-500",
  },
  {
    id: 3,
    text: "42 new Carbon Transactions logged",
    time: "1d ago",
    icon: Leaf,
    color: "text-green-600",
  },
  {
    id: 4,
    text: "R&D acknowledged Anti-Corruption Policy",
    time: "2d ago",
    icon: ShieldCheck,
    color: "text-purple-600",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-lg font-semibold text-slate-900">
        Recent Activity
      </h2>

      <div className="space-y-1">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.id}
              className="flex items-center justify-between rounded-xl px-2 py-3.5 transition hover:bg-slate-50"
            >
              <div className="flex items-center gap-3">
                <Icon size={18} className={activity.color} />
                <p className="text-sm text-slate-700">{activity.text}</p>
              </div>
              <span className="shrink-0 text-xs text-slate-400">
                {activity.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

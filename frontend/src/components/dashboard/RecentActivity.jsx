import {
  Leaf,
  Users,
  ShieldCheck,
  FileText,
  Trophy,
  CheckCircle2,
} from "lucide-react";

const activities = [
  {
    id: 1,
    title: "Carbon Emission Report Submitted",
    description: "Operations department submitted June emissions.",
    time: "10 mins ago",
    icon: Leaf,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 2,
    title: "CSR Event Completed",
    description: "Tree plantation drive completed successfully.",
    time: "1 hour ago",
    icon: Users,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 3,
    title: "Governance Policy Approved",
    description: "Remote Work Policy was approved by management.",
    time: "Yesterday",
    icon: ShieldCheck,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 4,
    title: "Monthly ESG Report Generated",
    description: "June ESG report is available for download.",
    time: "2 days ago",
    icon: FileText,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 5,
    title: "Sustainability Challenge Completed",
    description: "IT Department achieved 100% participation.",
    time: "3 days ago",
    icon: Trophy,
    color: "bg-pink-100 text-pink-600",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-xl font-semibold text-slate-900">
            Recent Activity
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Latest updates across your ESG platform
          </p>

        </div>

        <button className="text-sm font-medium text-green-600 hover:text-green-700">
          View All
        </button>

      </div>

      {/* Timeline */}

      <div className="space-y-5">

        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.id}
              className="flex items-start gap-4 rounded-2xl p-3 transition hover:bg-slate-50"
            >
              {/* Icon */}

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${activity.color}`}
              >
                <Icon size={22} />
              </div>

              {/* Content */}

              <div className="flex-1">

                <div className="flex items-center justify-between">

                  <h3 className="font-semibold text-slate-800">
                    {activity.title}
                  </h3>

                  <span className="text-xs text-slate-400">
                    {activity.time}
                  </span>

                </div>

                <p className="mt-1 text-sm text-slate-500">
                  {activity.description}
                </p>

              </div>

            </div>
          );
        })}

      </div>

      {/* Footer */}

      <div className="mt-6 rounded-2xl bg-green-50 p-4">

        <div className="flex items-center gap-3">

          <CheckCircle2
            className="text-green-600"
            size={22}
          />

          <div>

            <h4 className="font-semibold text-green-700">
              All systems operational
            </h4>

            <p className="text-sm text-green-600">
              No pending critical ESG alerts.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}
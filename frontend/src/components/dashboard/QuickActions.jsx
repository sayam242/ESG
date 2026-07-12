import {
  Leaf,
  Users,
  ShieldCheck,
  FileText,
  PlusCircle,
  Trophy,
} from "lucide-react";

const actions = [
  {
    title: "Add Emission",
    subtitle: "Log environmental data",
    icon: Leaf,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "CSR Activity",
    subtitle: "Create social initiative",
    icon: Users,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Governance Policy",
    subtitle: "Create new policy",
    icon: ShieldCheck,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Generate Report",
    subtitle: "Download ESG report",
    icon: FileText,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "New Challenge",
    subtitle: "Launch employee challenge",
    icon: Trophy,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Create Record",
    subtitle: "Add new ESG entry",
    icon: PlusCircle,
    color: "bg-slate-100 text-slate-700",
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6">

        <h2 className="text-xl font-semibold text-slate-900">
          Quick Actions
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Frequently used shortcuts
        </p>

      </div>

      {/* Grid */}

      <div className="grid grid-cols-2 gap-4">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="
                group
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-slate-200
                p-4
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-green-400
                hover:shadow-lg
              "
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${action.color}`}
              >
                <Icon size={22} />
              </div>

              <div className="text-left">

                <h3 className="font-semibold text-slate-800 group-hover:text-green-700">
                  {action.title}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  {action.subtitle}
                </p>

              </div>
            </button>
          );
        })}

      </div>

      {/* Bottom Button */}

      <button className="mt-6 w-full rounded-2xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700">
        View All Actions
      </button>

    </div>
  );
}
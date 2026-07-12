import {
  LayoutDashboard,
  Leaf,
  Package,
  ArrowLeftRight,
  Flag,
  Users,
  UserRoundCheck,
  Handshake,
  Shield,
  ClipboardCheck,
  FileWarning,
  Trophy,
  Medal,
  Gift,
  Crown,
  FileText,
  Settings,
  Bell,
  ChevronLeft,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const sectionColors = {
  ENVIRONMENTAL: "text-green-600",
  SOCIAL: "text-blue-600",
  GOVERNANCE: "text-purple-600",
  GAMIFICATION: "text-orange-500",
  REPORTS: "text-slate-500",
  SETTINGS: "text-slate-500",
};

const menu = [
  {
    title: "ENVIRONMENTAL",
    items: [
      {
        icon: <Leaf size={17} />,
        label: "Emission Factors",
        path: "/environment/emission-factors",
      },
      {
        icon: <Package size={17} />,
        label: "Product ESG Profiles",
        path: "/environment/products",
      },
      {
        icon: <ArrowLeftRight size={17} />,
        label: "Carbon Transactions",
        path: "/environment/transactions",
      },
      {
        icon: <Flag size={17} />,
        label: "Environmental Goals",
        path: "/environment/goals",
      },
    ],
  },
  {
    title: "SOCIAL",
    items: [
      {
        icon: <Users size={17} />,
        label: "CSR Activities",
        path: "/social/csr",
      },
      {
        icon: <UserRoundCheck size={17} />,
        label: "Employee Participation",
        path: "/social/participation",
      },
      {
        icon: <Handshake size={17} />,
        label: "Diversity Dashboard",
        path: "/social/diversity",
      },
    ],
  },
  {
    title: "GOVERNANCE",
    items: [
      {
        icon: <Shield size={17} />,
        label: "Policies",
        path: "/governance/policies",
      },
      {
        icon: <ClipboardCheck size={17} />,
        label: "Policy Acknowledgements",
        path: "/governance/acknowledgements",
      },
      {
        icon: <FileWarning size={17} />,
        label: "Audits",
        path: "/governance/audits",
      },
      {
        icon: <Bell size={17} />,
        label: "Compliance Issues",
        path: "/governance/compliance",
      },
    ],
  },
  {
    title: "GAMIFICATION",
    items: [
      {
        icon: <Trophy size={17} />,
        label: "Challenges",
        path: "/gamification/challenges",
      },
      {
        icon: <Users size={17} />,
        label: "Challenge Participation",
        path: "/gamification/participation",
      },
      {
        icon: <Medal size={17} />,
        label: "Badges",
        path: "/gamification/badges",
      },
      {
        icon: <Gift size={17} />,
        label: "Rewards",
        path: "/gamification/rewards",
      },
      {
        icon: <Crown size={17} />,
        label: "Leaderboard",
        path: "/gamification/leaderboard",
      },
    ],
  },
  {
    title: "REPORTS",
    items: [
      {
        icon: <FileText size={17} />,
        label: "Environmental Report",
        path: "/reports/environment",
      },
      {
        icon: <FileText size={17} />,
        label: "Social Report",
        path: "/reports/social",
      },
      {
        icon: <FileText size={17} />,
        label: "Governance Report",
        path: "/reports/governance",
      },
      {
        icon: <FileText size={17} />,
        label: "ESG Summary",
        path: "/reports/summary",
      },
      {
        icon: <FileText size={17} />,
        label: "Custom Report Builder",
        path: "/reports/custom",
      },
    ],
  },
  {
    title: "SETTINGS",
    items: [
      {
        icon: <Settings size={17} />,
        label: "Departments",
        path: "/settings/departments",
      },
      {
        icon: <Settings size={17} />,
        label: "Categories",
        path: "/settings/categories",
      },
      {
        icon: <Settings size={17} />,
        label: "ESG Configuration",
        path: "/settings/configuration",
      },
      {
        icon: <Settings size={17} />,
        label: "Notification Settings",
        path: "/settings/notifications",
      },
    ],
  },
];

export default function Sidebar() {
  return (
    <aside className="flex w-72 shrink-0 flex-col border-r border-slate-200 bg-white">
      <div className="flex h-20 items-center gap-3 border-b border-slate-200 px-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600">
          <Leaf size={22} className="text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900">
            EcoSphere
          </h1>
          <p className="text-xs text-slate-500">ESG Management Platform</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-4">
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            `mb-5 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
              isActive
                ? "bg-green-50 text-green-700"
                : "text-slate-700 hover:bg-slate-50"
            }`
          }
        >
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        {menu.map((section) => (
          <div key={section.title} className="mb-6">
            <h4
              className={`mb-2 px-3 text-[11px] font-bold tracking-wider ${sectionColors[section.title]}`}
            >
              {section.title}
            </h4>

            {section.items.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `mb-0.5 flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
                    isActive
                      ? "bg-green-50 font-medium text-green-700"
                      : "text-slate-600 hover:bg-slate-50"
                  }`
                }
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </div>
        ))}
      </div>

      <div className="border-t border-slate-200 p-3">
        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-2.5 text-sm text-slate-600 transition hover:bg-slate-50">
          <ChevronLeft size={16} />
          Collapse
        </button>
      </div>
    </aside>
  );
}

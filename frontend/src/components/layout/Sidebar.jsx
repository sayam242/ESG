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

const menu = [
  {
    title: "ENVIRONMENTAL",
    items: [
      {
        icon: <Leaf size={18} />,
        label: "Emission Factors",
        path: "/environment/emission-factors",
      },
      {
        icon: <Package size={18} />,
        label: "Product ESG Profiles",
        path: "/environment/products",
      },
      {
        icon: <ArrowLeftRight size={18} />,
        label: "Carbon Transactions",
        path: "/environment/transactions",
      },
      {
        icon: <Flag size={18} />,
        label: "Environmental Goals",
        path: "/environment/goals",
      },
    ],
  },

  {
    title: "SOCIAL",
    items: [
      {
        icon: <Users size={18} />,
        label: "CSR Activities",
        path: "/social/csr",
      },
      {
        icon: <UserRoundCheck size={18} />,
        label: "Employee Participation",
        path: "/social/participation",
      },
      {
        icon: <Handshake size={18} />,
        label: "Diversity Dashboard",
        path: "/social/diversity",
      },
    ],
  },

  {
    title: "GOVERNANCE",
    items: [
      {
        icon: <Shield size={18} />,
        label: "Policies",
        path: "/governance/policies",
      },
      {
        icon: <ClipboardCheck size={18} />,
        label: "Policy Acknowledgements",
        path: "/governance/acknowledgements",
      },
      {
        icon: <FileWarning size={18} />,
        label: "Audits",
        path: "/governance/audits",
      },
      {
        icon: <Bell size={18} />,
        label: "Compliance Issues",
        path: "/governance/compliance",
      },
    ],
  },

  {
    title: "GAMIFICATION",
    items: [
      {
        icon: <Trophy size={18} />,
        label: "Challenges",
        path: "/gamification/challenges",
      },
      {
        icon: <Users size={18} />,
        label: "Challenge Participation",
        path: "/gamification/participation",
      },
      {
        icon: <Medal size={18} />,
        label: "Badges",
        path: "/gamification/badges",
      },
      {
        icon: <Gift size={18} />,
        label: "Rewards",
        path: "/gamification/rewards",
      },
      {
        icon: <Crown size={18} />,
        label: "Leaderboard",
        path: "/gamification/leaderboard",
      },
    ],
  },

  {
    title: "REPORTS",
    items: [
      {
        icon: <FileText size={18} />,
        label: "Environmental Report",
        path: "/reports/environment",
      },
      {
        icon: <FileText size={18} />,
        label: "Social Report",
        path: "/reports/social",
      },
      {
        icon: <FileText size={18} />,
        label: "Governance Report",
        path: "/reports/governance",
      },
      {
        icon: <FileText size={18} />,
        label: "ESG Summary",
        path: "/reports/summary",
      },
      {
        icon: <FileText size={18} />,
        label: "Custom Report Builder",
        path: "/reports/custom",
      },
    ],
  },

  {
    title: "SETTINGS",
    items: [
      {
        icon: <Settings size={18} />,
        label: "Departments",
        path: "/settings/departments",
      },
      {
        icon: <Settings size={18} />,
        label: "Categories",
        path: "/settings/categories",
      },
      {
        icon: <Settings size={18} />,
        label: "ESG Configuration",
        path: "/settings/configuration",
      },
      {
        icon: <Settings size={18} />,
        label: "Notification Settings",
        path: "/settings/notifications",
      },
    ],
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-white border-r border-slate-200 flex flex-col">

      {/* Logo */}

      <div className="h-24 flex items-center px-6 border-b">

        <img
          src="/logo.png"
          alt="EcoSphere"
          className="w-12 h-12"
        />

        <div className="ml-4">

          <h1 className="text-4xl font-bold tracking-tight">
            EcoSphere
          </h1>

          <p className="text-sm text-slate-500">
            ESG Management Platform
          </p>

        </div>

      </div>

      {/* Navigation */}

      <div className="flex-1 overflow-y-auto px-4 py-5">

        {/* Dashboard */}

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-xl px-4 py-3 mb-6 text-sm font-medium transition
            ${
              isActive
                ? "bg-green-50 text-green-700"
                : "hover:bg-slate-100"
            }`
          }
        >
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        {/* Sections */}

        {menu.map((section) => (
          <div
            key={section.title}
            className="mb-8"
          >
            <h4 className="px-2 mb-3 text-xs font-bold tracking-wider text-slate-500">
              {section.title}
            </h4>

            {section.items.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 mb-1 text-sm transition
                  ${
                    isActive
                      ? "bg-green-50 text-green-700"
                      : "text-slate-700 hover:bg-slate-100"
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

      {/* Collapse */}

      <div className="border-t p-4">

        <button className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 hover:bg-slate-100">

          <ChevronLeft size={18} />

          Collapse

        </button>

      </div>

    </aside>
  );
}
import DashboardLayout from "../../components/layout/DashboardLayout";

// These components will be created next
import ScoreCards from "../components/dashboard/ScoreCards";
import EmissionTrendChart from "../components/dashboard/EmissionTrendChart";
import DepartmentRankingChart from "../components/dashboard/DepartmentRankingChart";
import RecentActivity from "../components/dashboard/RecentActivity";
import QuickActions from "../components/dashboard/QuickActions";

export default function Dashboard() {
  return (
    <DashboardLayout>
      {/* ================= Header ================= */}

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">
            Dashboard
          </h1>

          <p className="mt-2 text-slate-500">
            Welcome back 👋 Here's your ESG overview.
          </p>
        </div>

        <button className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700 transition">
          + New Report
        </button>
      </div>

      {/* ================= KPI Cards ================= */}

      <section className="grid grid-cols-4 gap-6 mb-8">

        {/* Card 1 */}

        <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
          <p className="text-slate-500 text-sm">
            Overall ESG Score
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            84
          </h2>

          <span className="mt-3 inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
            +8%
          </span>
        </div>

        {/* Card 2 */}

        <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
          <p className="text-slate-500 text-sm">
            Environmental
          </p>

          <h2 className="mt-4 text-4xl font-bold text-green-600">
            78
          </h2>

          <span className="mt-3 inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
            +4%
          </span>
        </div>

        {/* Card 3 */}

        <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
          <p className="text-slate-500 text-sm">
            Social
          </p>

          <h2 className="mt-4 text-4xl font-bold text-blue-600">
            89
          </h2>

          <span className="mt-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
            +10%
          </span>
        </div>

        {/* Card 4 */}

        <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
          <p className="text-slate-500 text-sm">
            Governance
          </p>

          <h2 className="mt-4 text-4xl font-bold text-purple-600">
            86
          </h2>

          <span className="mt-3 inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-700">
            +5%
          </span>
        </div>

      </section>

      {/* ================= Charts ================= */}

      <section className="grid grid-cols-3 gap-6 mb-8">

        {/* ESG Trend */}

        <div className="col-span-2 rounded-2xl border border-slate-200 bg-white p-6 h-[420px]">

          <h2 className="text-xl font-semibold mb-6">
            ESG Performance Trend
          </h2>

          <div className="flex h-full items-center justify-center text-slate-400">
            Emission Trend Chart
          </div>

        </div>

        {/* Department Ranking */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 h-[420px]">

          <h2 className="text-xl font-semibold mb-6">
            Department Rankings
          </h2>

          <div className="flex h-full items-center justify-center text-slate-400">
            Ranking Chart
          </div>

        </div>

      </section>

      {/* ================= Bottom Section ================= */}

      <section className="grid grid-cols-2 gap-6">

        {/* Recent Activity */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 h-[320px]">

          <h2 className="text-xl font-semibold mb-6">
            Recent Activity
          </h2>

          <div className="flex h-full items-center justify-center text-slate-400">
            Activity Feed
          </div>

        </div>

        {/* Quick Actions */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 h-[320px]">

          <h2 className="text-xl font-semibold mb-6">
            Quick Actions
          </h2>

          <div className="flex h-full items-center justify-center text-slate-400">
            Action Buttons
          </div>

        </div>

      </section>

    </DashboardLayout>
  );
}
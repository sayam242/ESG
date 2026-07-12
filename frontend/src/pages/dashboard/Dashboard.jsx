import DashboardLayout from "../../components/layout/DashboardLayout";
import ScoreCards from "../../components/dashboard/ScoreCards";
import EmissionTrendChart from "../../components/dashboard/EmissionTrendChart";
import DepartmentRankingChart from "../../components/dashboard/DepartmentRankingChart";
import RecentActivity from "../../components/dashboard/RecentActivity";
import QuickActions from "../../components/dashboard/QuickActions";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <ScoreCards />

        <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <EmissionTrendChart />
          </div>
          <DepartmentRankingChart />
        </section>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RecentActivity />
          </div>
          <QuickActions />
        </section>
      </div>
    </DashboardLayout>
  );
}

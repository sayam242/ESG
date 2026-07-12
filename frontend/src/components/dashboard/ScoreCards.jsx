import { Leaf, Users, Shield, PieChart } from "lucide-react";

const cards = [
  {
    title: "Environmental Score",
    score: 82,
    icon: Leaf,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    barColor: "bg-green-500",
  },
  {
    title: "Social Score",
    score: 74,
    icon: Users,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    barColor: "bg-blue-500",
  },
  {
    title: "Governance Score",
    score: 88,
    icon: Shield,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    barColor: "bg-purple-500",
  },
  {
    title: "Overall ESG Score",
    score: 81,
    icon: PieChart,
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    barColor: "bg-teal-500",
  },
];

function ScoreCard({ title, score, icon: Icon, iconBg, iconColor, barColor }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-slate-600">{title}</p>
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-full ${iconBg}`}
        >
          <Icon size={20} className={iconColor} />
        </div>
      </div>

      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-4xl font-bold text-slate-900">{score}</span>
        <span className="text-lg text-slate-400">/100</span>
      </div>

      <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full rounded-full ${barColor}`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}

export default function ScoreCards() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <ScoreCard key={card.title} {...card} />
      ))}
    </div>
  );
}

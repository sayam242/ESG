import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jun", emissions: 350 },
  { month: "Jul", emissions: 400 },
  { month: "Aug", emissions: 200 },
  { month: "Sep", emissions: 450 },
  { month: "Oct", emissions: 200 },
  { month: "Nov", emissions: 500 },
  { month: "Dec", emissions: 400 },
  { month: "Jan", emissions: 300 },
  { month: "Feb", emissions: 450 },
  { month: "Mar", emissions: 550 },
  { month: "Apr", emissions: 400 },
  { month: "May", emissions: 480 },
];

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-lg">
      <p className="mb-1 text-sm font-semibold text-slate-800">{label}</p>
      <p className="text-sm text-green-600">
        {payload[0].value} tCO2e
      </p>
    </div>
  );
}

export default function EmissionTrendChart() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-semibold text-slate-900">
        Emissions Trend (12 mo)
      </h2>

      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 20, left: 10, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="4 4" stroke="#E2E8F0" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fill: "#64748b" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[0, 600]}
              ticks={[0, 150, 300, 450, 600]}
              tick={{ fontSize: 12, fill: "#64748b" }}
              axisLine={false}
              tickLine={false}
              label={{
                value: "tCO2e",
                angle: -90,
                position: "insideLeft",
                offset: 10,
                style: { fontSize: 12, fill: "#64748b" },
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="emissions"
              stroke="#22C55E"
              strokeWidth={2.5}
              dot={{ r: 4, fill: "#22C55E", strokeWidth: 0 }}
              activeDot={{ r: 6, fill: "#22C55E" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

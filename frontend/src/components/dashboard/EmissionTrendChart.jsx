import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    month: "Jan",
    environmental: 68,
    social: 72,
    governance: 75,
    overall: 71,
  },
  {
    month: "Feb",
    environmental: 71,
    social: 74,
    governance: 78,
    overall: 74,
  },
  {
    month: "Mar",
    environmental: 74,
    social: 77,
    governance: 80,
    overall: 77,
  },
  {
    month: "Apr",
    environmental: 78,
    social: 81,
    governance: 83,
    overall: 80,
  },
  {
    month: "May",
    environmental: 81,
    social: 84,
    governance: 85,
    overall: 83,
  },
  {
    month: "Jun",
    environmental: 84,
    social: 88,
    governance: 89,
    overall: 87,
  },
];

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload) return null;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
      <p className="mb-3 font-semibold">{label}</p>

      {payload.map((item) => (
        <div
          key={item.name}
          className="flex justify-between gap-6 text-sm"
        >
          <span style={{ color: item.color }}>
            {item.name}
          </span>

          <span className="font-semibold">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function EmissionTrendChart() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-xl font-semibold text-slate-900">
            ESG Performance Trend
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Monthly ESG score progression
          </p>

        </div>

        <select className="rounded-xl border border-slate-200 px-4 py-2 text-sm focus:outline-none">

          <option>Last 6 Months</option>

          <option>Last Year</option>

          <option>Last 3 Years</option>

        </select>

      </div>

      {/* Chart */}

      <div className="h-[380px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: 0,
              bottom: 0,
            }}
          >

            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#E2E8F0"
            />

            <XAxis
              dataKey="month"
              tick={{ fontSize: 12 }}
            />

            <YAxis
              domain={[50, 100]}
              tick={{ fontSize: 12 }}
            />

            <Tooltip
              content={<CustomTooltip />}
            />

            <Legend />

            <Line
              type="monotone"
              dataKey="environmental"
              stroke="#22C55E"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
              name="Environmental"
            />

            <Line
              type="monotone"
              dataKey="social"
              stroke="#3B82F6"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
              name="Social"
            />

            <Line
              type="monotone"
              dataKey="governance"
              stroke="#A855F7"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
              name="Governance"
            />

            <Line
              type="monotone"
              dataKey="overall"
              stroke="#F59E0B"
              strokeWidth={4}
              dot={{ r: 6 }}
              activeDot={{ r: 9 }}
              name="Overall ESG"
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}
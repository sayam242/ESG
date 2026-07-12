import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts";

const data = [
  {
    department: "Operations",
    score: 91,
  },
  {
    department: "Finance",
    score: 87,
  },
  {
    department: "HR",
    score: 84,
  },
  {
    department: "IT",
    score: 79,
  },
  {
    department: "Manufacturing",
    score: 73,
  },
];

const colors = [
  "#16a34a",
  "#22c55e",
  "#4ade80",
  "#86efac",
  "#bbf7d0",
];

export default function DepartmentRankingChart() {
  return (
    <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-xl font-semibold text-slate-900">
            Department ESG Ranking
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Top performing departments
          </p>

        </div>

      </div>

      {/* Chart */}

      <div className="h-80">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <BarChart
            data={data}
            layout="vertical"
            margin={{
              top: 10,
              right: 20,
              left: 10,
              bottom: 10,
            }}
          >

            <XAxis
              type="number"
              domain={[0, 100]}
              tick={{ fontSize: 12 }}
            />

            <YAxis
              dataKey="department"
              type="category"
              tick={{ fontSize: 13 }}
              width={110}
            />

            <Tooltip />

            <Bar
              dataKey="score"
              radius={[8, 8, 8, 8]}
            >

              {data.map((entry, index) => (

                <Cell
                  key={index}
                  fill={colors[index]}
                />

              ))}

            </Bar>

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* Bottom */}

      <div className="mt-6 space-y-4">

        {data.map((item, index) => (

          <div
            key={item.department}
            className="flex justify-between items-center"
          >

            <div className="flex items-center gap-3">

              <div
                className="w-3 h-3 rounded-full"
                style={{
                  background: colors[index],
                }}
              />

              <span className="text-sm text-slate-700">
                {item.department}
              </span>

            </div>

            <span className="font-semibold text-slate-800">

              {item.score}

            </span>

          </div>

        ))}

      </div>

    </div>
  );
}
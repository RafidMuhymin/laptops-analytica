import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import data from "./data";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <main className="chart-container p-5">
      {/* Month Wise Sell - LineChart */}
      <section>
        <h2>Month Wise Sell</h2>

        <LineChart width={300} height={300} data={data}>
          <Line type="monotone" dataKey="sell" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="month" />
          <YAxis type="number" domain={["auto", "auto"]} />
          <Tooltip />
          <Legend />
        </LineChart>
      </section>

      {/* Investment VS Revenue - LineChart */}
      <section>
        <h2>Investment VS Revenue</h2>

        <AreaChart
          width={300}
          height={300}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <Area
            type="monotone"
            dataKey="investment"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
        </AreaChart>
      </section>

      {/* Investment VS Revenue - BarChart */}
      <section>
        <h2>Investment VS Revenue</h2>

        <BarChart width={300} height={300} data={data}>
          <Bar dataKey="investment" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#82ca9d" />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
        </BarChart>
      </section>

      {/* Investment VS Revenue - PieChart */}
      <section>
        <h2>Investment VS Revenue</h2>

        <PieChart width={300} height={300}>
          <Pie
            data={data}
            dataKey="investment"
            nameKey="month"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
          />
          <Pie
            data={data}
            dataKey="revenue"
            nameKey="month"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            label
          />
          <Tooltip />
        </PieChart>
      </section>
    </main>
  );
}

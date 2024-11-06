import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, BarChart, Legend, Bar, LineChart, Line, ComposedChart } from "recharts";
import "./Chart.css";

function Chart() {
  const data = [
    { name: "فروردین", uv: 4000, pv: 2400, amt: 2400 },
    { name: "اردیبهشت", uv: 3000, pv: 1398, amt: 2210 },
    { name: "خرداد", uv: 2000, pv: 9800, amt: 2290 },
    { name: "تیر", uv: 2780, pv: 3908, amt: 2000 },
    { name: "مرداد", uv: 1890, pv: 4800, amt: 2181 },
    { name: "شهریور", uv: 2390, pv: 3800, amt: 2500 },
    { name: "مهر", uv: 3490, pv: 4300, amt: 2100 },
    { name: "آبان", uv: 4000, pv: 2400, amt: 2400 },
    { name: "آذر", uv: 3000, pv: 1398, amt: 2210 },
    { name: "دی", uv: 2000, pv: 9800, amt: 2290 },
    { name: "بهمن", uv: 2780, pv: 3908, amt: 2000 },
    { name: "اسفند", uv: 1890, pv: 4800, amt: 2181 }
  ];

  return (
    <div className="chart_container">
        <div className="chart_card_main">
          <h3>نمودار منطقه‌ای</h3>
          <AreaChart width={1500} height={250} data={data}>
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
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
        </div>
      <div className="chart_row">
       
      </div>

      <div className="chart_row">
        <div className="chart_card">
          <h3>نمودار خطی</h3>
          <LineChart width={550} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>

        <div className="chart_card">
          <h3>نمودار ترکیبی</h3>
          <ComposedChart width={550} height={250} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </div>
      </div>
    </div>
  );
}

export default Chart;

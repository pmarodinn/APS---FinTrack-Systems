"use client";

import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    renda: 4000,
    gastos: 2400,
  },
  {
    name: "Fev",
    renda: 3000,
    gastos: 1398,
  },
  {
    name: "Mar",
    renda: 2000,
    gastos: 9800,
  },
  {
    name: "Abr",
    renda: 2780,
    gastos: 3908,
  },
  {
    name: "Mai",
    renda: 1890,
    gastos: 4800,
  },
  {
    name: "Jun",
    renda: 2390,
    gastos: 3800,
  },
  {
    name: "Jul",
    renda: 3490,
    gastos: 4300,
  },
  {
    name: "Ago",
    renda: 3490,
    gastos: 4300,
  },
  {
    name: "Set",
    renda: 3490,
    gastos: 4300,
  },
  {
    name: "Out",
    renda: 3490,
    gastos: 4300,
  },
  {
    name: "Nov",
    renda: 3490,
    gastos: 4300,
  },
  {
    name: "Dec",
    renda: 3490,
    gastos: 4300,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finanças</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false}  tickMargin={20}/>
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="renda"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line type="monotone" dataKey="gastos" stroke="#CFCEFF" strokeWidth={5}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;

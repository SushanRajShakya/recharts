import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Label } from "recharts";

const data = [
  {
    name: "Page A",
    dataKeyX: 0,
    uv: 40,
    pv: 24,
  },
  {
    name: "Page B",
    dataKeyX: 30,
    uv: 30,
    pv: 13,
  },
  {
    name: "Page C",
    dataKeyX: 60,
    uv: 20,
    pv: 60,
  },
  {
    name: "Page D",
    dataKeyX: 90,
    uv: 27,
    pv: 39,
  },
  {
    name: "Page E",
    dataKeyX: 120,
    uv: 18,
    pv: 48,
  },
  {
    name: "Page F",
    dataKeyX: 150,
    uv: 23,
    pv: 38,
  },
  {
    name: "Page G",
    dataKeyX: 180,
    uv: 55,
    pv: 43,
  },
  {
    name: "Page H",
    dataKeyX: 0,
    uv: 30,
    pv: 12,
  },
  {
    name: "Page I",
    dataKeyX: 30,
    uv: 50,
    pv: 69,
  },
  {
    name: "Page J",
    dataKeyX: 60,
    uv: 24,
    pv: 30,
  },
  {
    name: "Page K",
    dataKeyX: 90,
    uv: 22,
    pv: 78,
  },
  {
    name: "Page L",
    dataKeyX: 120,
    uv: 55,
    pv: 11,
  },
  {
    name: "Page M",
    dataKeyX: 150,
    uv: 5,
    pv: 65,
  },
  {
    name: "Page N",
    dataKeyX: 180,
    uv: 98,
    pv: 45,
  },
];

const HorizontalLineChart = (props) => {
  return (
    <div className="horizontal-line-chart">
      <LineChart
        width={1200}
        height={700}
        data={data}
        margin={{
          top: 100,
          right: 50,
          left: 100,
          bottom: 100,
        }}
      >
        <CartesianGrid />
        <XAxis dataKey={"dataKeyX"}>
          <Label position={"bottom"} offset={20}>
            {"Days back"}
          </Label>
        </XAxis>
        <YAxis ticks={["", 20, 40, 60]} domain={[0, 80]}>
          <Label position={"left"} offset={20}>
            {"Titles"}
          </Label>
        </YAxis>
        <Line dataKey="pv" stroke="#2562B5" strokeWidth={2} />
        <Line dataKey="uv" stroke="#5BFB70" strokeWidth={2} />
      </LineChart>
    </div>
  );
};

export default HorizontalLineChart;

import React from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const HorizontalBarChart = (props) => {
  const { data } = props;
  console.log(data)

  return (
    <BarChart
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
      <XAxis type="number" /> <YAxis dataKey="name" type="category" />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
};

export default HorizontalBarChart;

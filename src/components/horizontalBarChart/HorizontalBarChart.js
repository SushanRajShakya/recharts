import React from "react";
import { Bar, BarChart, LabelList, Text, XAxis, YAxis } from "recharts";

const HorizontalBarChart = (props) => {
  const { data } = props;

  return (
    <div className="horizontal-bar-chart">
      <BarChart
        layout="vertical"
        width={700}
        height={700}
        data={data}
        barCategoryGap="30%"
        margin={{
          top: 100,
          right: 40,
          left: 150,
          bottom: 100,
        }}
      >
        <XAxis type="number" domain={[0, 160]} />
        <YAxis type="category" tick={false} />
        {/* <YAxis type="category" tickSize={0} tickMargin={20} dataKey={"name"} /> */}
        <Bar dataKey="value" fill="#7F8A86">
          <LabelList dataKey={"name"} position="left" offset={15} width={150} />
        </Bar>
      </BarChart>
    </div>
  );
};

export default HorizontalBarChart;

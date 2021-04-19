import React from "react";
import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";

import { DEFAULT_LABELS } from "../../mocks/horizontal-stack-bar";
import { horizontalBarChartConfig } from "../../config/horizontalBarChartConfig";

const HorizontalStackBar = (props) => {
  const { data, colorScale } = props;
  
  const keys =
    data && data.length
      ? Object.keys(data[0]).filter((item) => item.includes("dataSet"))
      : [];

  return (
    <div className="horizontal-bar-chart">
      <BarChart {...horizontalBarChartConfig} data={data}>
        <XAxis type="number" hide />{" "}
        <YAxis dataKey="name" type="category" hide />
        {keys.map((item, index) => {
          return (
            <Bar
              dataKey={item}
              stroke="black"
              strokeWidth="0.1%"
              stackId="bar-chart"
              key={item}
              fill={colorScale[index]}
            >
              <LabelList
                offset={40}
                valueAccessor={() => DEFAULT_LABELS[index]}
                position="top"
              />
              <LabelList dataKey={item} position="top" offset={15} />
            </Bar>
          );
        })}
      </BarChart>
    </div>
  );
};

export default HorizontalStackBar;

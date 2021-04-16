import React from "react";
import { Bar, BarChart, LabelList } from "recharts";
import { verticalBarChartConfig } from "../../config/verticalBarChartConfig";

const BarTitle = (props) => {
  const { x, value, width } = props;

  return (
    <text
      x={x + width / 2}
      y={15}
      fill="black"
      fontSize="1.5em"
      fontWeight="bold"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {value}
    </text>
  );
};

const _getBarLabel = (dataSetKey, labelIndex, accessorData) => {
  const { labels } = accessorData;

  const dataSet = accessorData[dataSetKey] || 0;
  const label = labels[labelIndex] || "";

  return dataSet ? `${dataSet} ${label}` : "";
};

const VerticalBarChart = (props) => {
  const { data, colorScale } = props;

  return (
    <div className="vertical-bar-chart">
      <BarChart {...verticalBarChartConfig}>
        {data.map((item, index) => (
          <Bar
            dataKey={`dataSet${index + 1}`}
            stackId="bar-chart"
            key={`dataSet${index + 1}`}
            fill={colorScale[index].background}
          >
            <LabelList
              valueAccessor={(accessorData) =>
                _getBarLabel(`dataSet${index + 1}`, index, accessorData)
              }
              position="center"
              fill={colorScale[index].textColor}
            />
            {index === data.length - 1 && (
              <>
                <LabelList dataKey="title" content={<BarTitle />} />
                <LabelList dataKey="name" position="top" />
              </>
            )}
          </Bar>
        ))}
      </BarChart>
    </div>
  );
};

export default VerticalBarChart;

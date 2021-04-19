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

const VerticalStackBar = (props) => {
  const { data, colorScale } = props;
  const keys =
    data && data.length
      ? Object.keys(data[0]).filter((item) => item.includes("dataSet"))
      : [];

  return (
    <div className="vertical-bar-chart">
      <BarChart {...verticalBarChartConfig} data={data}>
        {keys.map((item, index) => (
          <Bar
            dataKey={item}
            stackId="bar-chart"
            key={item}
            fill={colorScale[index].background}
          >
            <LabelList
              valueAccessor={(accessorData) =>
                _getBarLabel(item, index, accessorData)
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

export default VerticalStackBar;

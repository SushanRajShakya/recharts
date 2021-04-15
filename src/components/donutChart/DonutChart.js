import { Cell, Pie, PieChart } from "recharts";
import React, { useEffect, useState } from "react";

import DonutLegend from "./DonutLegend";
import DonutDetails from "./DonutDetails";
import { donutChartConfig } from "../../config/donutChartConfig";

const _prepareLegendData = (data, colorScale) => {
  return data.map((item, index) => {
    return { ...item, color: colorScale[index] };
  });
};

const _getTotalChartDetails = (data) => {
  let sum = 0;

  data.forEach((item) => (sum += item.value || 0));

  return { label: `${sum} Total`, description: "" };
};

const DonutChart = (props) => {
  const { data, colorScale } = props;

  const [slice, setSlice] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [chartDetails, setChartDetails] = useState(
    donutChartConfig.emptyChartDetails
  );
  const [chartColorScale, setChartColorScale] = useState(colorScale);

  useEffect(() => {
    if (slice) {
      setChartColorScale([slice[0].color]);
      setChartData(slice);
      setChartDetails({
        label: slice[0].detailLabel,
        description: slice[0].description,
      });
    } else {
      setChartColorScale(colorScale);
      setChartData(data);
      setChartDetails(_getTotalChartDetails(data));
    }
  }, [data, slice, colorScale]);

  return (
    <div className="donut-chart">
      <PieChart width={donutChartConfig.width} height={donutChartConfig.height}>
        <Pie data={chartData} {...donutChartConfig}>
          {chartColorScale.map((item, index) => (
            <Cell key={`cell-${index}`} fill={chartColorScale[index]} />
          ))}
        </Pie>
      </PieChart>
      <DonutDetails {...chartDetails} />
      <DonutLegend
        data={_prepareLegendData(data, colorScale)}
        slice={slice}
        setSlice={setSlice}
      />
    </div>
  );
};

export default DonutChart;

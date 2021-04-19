import "./App.css";
import "./assets/bar-chart.css";
import "./assets/donut-wrapper.css";

import DonutChart from "./components/donutChart";
import DONUT_CHART_DATA from "./mocks/donut-chart";
import VerticalStackBar from "./components/verticalStackBar";
import HorizontalStackBar from "./components/horizontalStackBar";
import * as horizontalStackBarData from "./mocks/horizontal-stack-bar";
import * as horizontalBarChartData from "./mocks/horizontal-bar-chart";
import BAR_CHART_DATA, { BAR_CHART_COLORSCALE } from "./mocks/bar-chart";
import HorizontalBarChart from "./components/horizontalBarChart/HorizontalBarChart";

function App() {
  return (
    <div className="App">
      <DonutChart
        data={DONUT_CHART_DATA}
        colorScale={["#4018B1", "#E49F38", "#B11890"]}
      />
      <hr />
      <br />
      <br />
      <VerticalStackBar
        data={BAR_CHART_DATA}
        colorScale={BAR_CHART_COLORSCALE}
      />
      <hr />
      <br />
      <br />
      <HorizontalStackBar
        data={horizontalStackBarData.BAR_CHART_DATA}
        colorScale={horizontalStackBarData.BAR_CHART_COLORSCALE}
      />
      <hr />
      <br />
      <br />
      <HorizontalBarChart data={horizontalBarChartData.DATA} />
    </div>
  );
}

export default App;

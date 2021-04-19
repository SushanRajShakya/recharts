import "./App.css";
import "./assets/bar-chart.css";
import "./assets/donut-wrapper.css";

import DonutChart from "./components/donutChart";
import DONUT_CHART_DATA from "./mocks/donut-chart";
import VerticalBarChart from "./components/verticalBarChart";
import HorizontalBarChart from "./components/horizontalBarChart";
import * as horizontalBarChart from "./mocks/horizontal-bar-chart";
import BAR_CHART_DATA, { BAR_CHART_COLORSCALE } from "./mocks/bar-chart";

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
      <VerticalBarChart
        data={BAR_CHART_DATA}
        colorScale={BAR_CHART_COLORSCALE}
      />
      <hr />
      <br />
      <br />
      <HorizontalBarChart
        data={horizontalBarChart.BAR_CHART_DATA}
        colorScale={horizontalBarChart.BAR_CHART_COLORSCALE}
      />
    </div>
  );
}

export default App;

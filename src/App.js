import "./App.css";
import "./assets/donut-wrapper.css";
import "./assets/vertical-bar-chart.css";

import DonutChart from "./components/donutChart";
import DONUT_CHART_DATA from "./mocks/donut-chart";
import VerticalBarChart from "./components/verticalBarChart";
import BAR_CHART_DATA, { BAR_CHART_COLORSCALE } from "./mocks/bar-chart";

function App() {
  return (
    <div className="App">
      <DonutChart
        data={DONUT_CHART_DATA}
        colorScale={["#4018B1", "#E49F38", "#B11890"]}
      />
      <hr />
      <br/>
      <br/>
      <VerticalBarChart
        data={BAR_CHART_DATA}
        colorScale={BAR_CHART_COLORSCALE}
      />
    </div>
  );
}

export default App;

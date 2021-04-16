import "./App.css";
import "./assets/donut-wrapper.css";
import "./assets/vertical-bar-chart.css";

import BAR_CHART_DATA from "./mocks/bar-chart";
import DonutChart from "./components/donutChart";
import DONUT_CHART_DATA from "./mocks/donut-chart";
import VerticalBarChart from "./components/verticalBarChart";

function App() {
  return (
    <div className="App">
      <DonutChart
        data={DONUT_CHART_DATA}
        colorScale={["#4018B1", "#E49F38", "#B11890"]}
      />
      <VerticalBarChart data={BAR_CHART_DATA} />
    </div>
  );
}

export default App;

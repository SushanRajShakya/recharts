import "./App.css";
import "./assets/donut-wrapper.css";

import DonutChart from "./components/donutChart";
import DONUT_CHART_DATA from "./mocks/donut-chart";

function App() {
  return (
    <div className="App">
      <DonutChart
        data={DONUT_CHART_DATA}
        colorScale={["#4018B1", "#E49F38", "#B11890"]}
      />
    </div>
  );
}

export default App;

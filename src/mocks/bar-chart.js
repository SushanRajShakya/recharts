const BAD_LABEL = ["Bad"];
const DEFAULT_LABEL = ["Waiting", "Queued", "Sent"];

export const BAR_CHART_COLORSCALE = [
  {
    background: "#814F4F",
    textColor: "white",
  },
  {
    background: "#C4C4C4",
    textColor: "black",
  },
  {
    background: "#A99898",
    textColor: "black",
  },
];

const BAR_CHART_DATA = [
  {
    name: "60 Total Today",
    title: "60 Day",
    dataSet1: 30,
    dataSet2: 10,
    dataSet3: 20,
    labels: DEFAULT_LABEL,
  },
  {
    name: "80 Total Today",
    title: "90 Day",
    dataSet1: 40,
    dataSet2: 15,
    dataSet3: 25,
    labels: DEFAULT_LABEL,
  },
  {
    name: "120 Total Today",
    title: "120+",
    dataSet1: 120,
    labels: BAD_LABEL,
  },
];

export default BAR_CHART_DATA;

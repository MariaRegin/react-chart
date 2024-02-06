import logo from "./logo.svg";
import "./App.css";
import { Chart } from "react-google-charts";

const data = [
  ["Task", "Time"],
  ["Work", 2],
  ["Sleep", 7],
  ["Dream", 2],
  ["Listen to music", 2],
  ["Read", 11],
];

const options = {
  title: "Things To Do Today",
};

function App() {
  return (
    <div className="App">
      <h1>Daily Tasks Chart</h1>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
}

export default App;

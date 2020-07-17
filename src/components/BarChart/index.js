import React from "react";
import Chart from "react-google-charts";
import "../BarChart/styles.css";

export default function BarChart() {
  const data = [
    ["x-axis", "Temperature"],
    ["23F", 23],
    ["12F", 12],
    ["18F", 18],
    ["23F", 23],
    ["12F", 12],
    ["20F", 20],
    ["18F", 18],
    ["20F", 20],
  ];

  const options = {
    vAxis: {
      gridlines: {
        color: "transparent",
      },
      baselineColor: "#fff",
      gridlineColor: "#fff",
      textPosition: "none",
    },
    legend: { position: "none" },
    width: "100%",
    height: "200px",
  };
  return (
    <div className="chart-wrapper ">
      <Chart chartType="ColumnChart" data={data} options={options} />
    </div>
  );
}

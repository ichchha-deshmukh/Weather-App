import React from "react";
import Chart from "react-google-charts";
import "../BarChart/styles.css";

export default function BarChart({ chartData = [] }) {
  const data = [["Time", "Temperature"], ...chartData];

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

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ labels, data, colors }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Fleet Status",
        data,
        backgroundColor: colors,
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default PieChart;

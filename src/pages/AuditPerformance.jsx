import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const AuditPerformance = () => {
  // Mock Monthly Data (You can replace it later with backend API)
  const labels = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const totalAudits = [30, 25, 40, 35, 50, 45, 48, 38, 42, 50, 55, 60];
  const successfulClosures = [20, 18, 32, 30, 42, 40, 44, 34, 39, 47, 51, 58];

  // Data for Line Chart (Audit Completion Trends)
  const lineChartData = {
    labels,
    datasets: [
      {
        label: "Total Audits Conducted",
        data: totalAudits,
        borderColor: "#3B82F6",
        backgroundColor: "#3B82F6",
        tension: 0.4,
        fill: false,
      },
      {
        label: "Audits Closed Successfully",
        data: successfulClosures,
        borderColor: "#22C55E",
        backgroundColor: "#22C55E",
        tension: 0.4,
        fill: false,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-brand-dark mb-8">
          Audit Performance Trends
        </h2>

        {/* Line Chart Only */}
        <div className="bg-white p-6 rounded shadow mb-10">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Audit Completion Over Time
          </h3>
          <Line data={lineChartData} />
        </div>
      </div>
    </div>
  );
};

export default AuditPerformance;

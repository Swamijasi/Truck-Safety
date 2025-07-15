import React, { useEffect, useState } from "react";
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

const initialYearlyData = {
  2025: {
    totalAudits: [30, 25, 40, 35, 50, 45, 48, 38, 42, 50, 55, 60],
    successfulClosures: [20, 18, 32, 30, 42, 40, 44, 34, 39, 47, 51, 58],
  },
  2026: {
    totalAudits: new Array(12).fill(0),
    successfulClosures: new Array(12).fill(0),
  },
};

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const AuditPerformance = () => {
  const [yearlyData, setYearlyData] = useState(initialYearlyData);
  const [yearOptions, setYearOptions] = useState([ "2025", "2026"]);
  const [selectedYear, setSelectedYear] = useState("2025");

  // Load last selected year if saved
  useEffect(() => {
    const saved = localStorage.getItem("auditYear");
    if (saved && yearOptions.includes(saved)) {
      setSelectedYear(saved);
    }
  }, [yearOptions]);

  const handleYearChange = (e) => {
    const year = e.target.value;
    setSelectedYear(year);
    localStorage.setItem("auditYear", year);

    const nextYear = (parseInt(year) + 1).toString();
    if (!yearOptions.includes(nextYear)) {
      setYearOptions((prev) => [...prev, nextYear]);
      setYearlyData((prev) => ({
        ...prev,
        [nextYear]: {
          totalAudits: new Array(12).fill(0),
          successfulClosures: new Array(12).fill(0),
        },
      }));
    }
  };

  const chartData = {
    labels: months,
    datasets: [
      {
        label: "Total Audits Conducted",
        data: yearlyData[selectedYear]?.totalAudits || [],
        borderColor: "#3B82F6",
        backgroundColor: "#3B82F6",
        tension: 0.4,
        fill: false,
      },
      {
        label: "Audits Closed Successfully",
        data: yearlyData[selectedYear]?.successfulClosures || [],
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
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-brand-dark">Audit Performance Trends</h2>
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className="border border-gray-300 rounded px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {yearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Audit Completion Over Time ({selectedYear})
          </h3>
          <Line data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default AuditPerformance;


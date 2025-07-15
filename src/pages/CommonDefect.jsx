import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const CommonDefect = () => {
  // Sample 15 NG Point frequency data
  const frequentNGPoints = [
    { label: "Brake Issue", count: 34 },
    { label: "Oil Leak", count: 29 },
    { label: "Tire Wear", count: 27 },
    { label: "Steering Fault", count: 24 },
    { label: "Horn Not Working", count: 20 },
    { label: "Lights Faulty", count: 19 },
    { label: "Seat Belt", count: 18 },
    { label: "Windshield Crack", count: 17 },
    { label: "Suspension Issue", count: 16 },
    { label: "Exhaust Smoke", count: 15 },
    { label: "Clutch Problem", count: 14 },
    { label: "AC Not Working", count: 13 },
    { label: "Wiper Malfunction", count: 12 },
    { label: "Side Mirror Missing", count: 11 },
    { label: "Number Plate Damaged", count: 10 },
  ];

  const severityDistribution = {
    red: 120,
    yellow: 80,
  };

  const severityPieData = {
    labels: ["Red NG Points", "Yellow NG Points"],
    datasets: [
      {
        data: [severityDistribution.red, severityDistribution.yellow],
        backgroundColor: ["#ef4444", "#facc15"],
        borderColor: ["#fff", "#fff"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-2xl font-bold text-brand-dark mb-2">
          Common Defect Trends (NG Point Analysis)
        </h2>

        {/* Top 15 NG Points Table */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Top 15 Most Frequent NG Points
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b border-r">NG Point Description</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Frequency</th>
                </tr>
              </thead>
              <tbody>
                {frequentNGPoints.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border-b border-r text-sm text-gray-800">{item.label}</td>
                    <td className="px-4 py-2 border-b text-sm text-gray-800">{item.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Severity Distribution as Pie Chart */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Severity Distribution (Red vs Yellow NG Points)
          </h3>
          <div className="max-w-sm mx-auto">
            <Pie data={severityPieData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonDefect;

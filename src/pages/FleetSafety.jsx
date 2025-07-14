import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FaShieldAlt, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

const FleetSafety = () => {
  const [truckCounts, setTruckCounts] = useState({
    red: 0,
    yellow: 0,
    green: 0,
  });

  useEffect(() => {
    axios
      .get("/api/TruckController/GetTruckStatusCounts")
      .then((res) => {
        const data = res.data;
        setTruckCounts({
          red: data.redCount || 0,
          yellow: data.yellowCount || 0,
          green: data.greenCount || 0,
        });
      })
      .catch((err) => {
        console.error("Error fetching truck status:", err);
      });
  }, []);

  const totalTrucks = truckCounts.red + truckCounts.yellow + truckCounts.green;

  const pieData = {
    labels: ["Red", "Yellow", "Green"],
    datasets: [
      {
        data: [truckCounts.red, truckCounts.yellow, truckCounts.green],
        backgroundColor: ["#EF4444", "#FACC15", "#22C55E"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-brand-dark mb-6">
          Fleet Safety Status
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Critical Risk (Red) */}
          <div className="relative bg-white border-l-4 border-red-500 p-6 rounded-lg shadow hover:shadow-lg hover:scale-[1.02] transition-transform duration-300">
            <FaExclamationTriangle className="absolute top-4 right-4 text-red-500 text-xl" />
            <h3 className="text-gray-800 font-semibold text-sm">Critical Risk</h3>
            <div className="text-red-600 text-4xl font-bold mt-2">{truckCounts.red}</div>
            <p className="text-gray-800 mt-2 text-sm">Red Trucks</p>
            <p className="text-gray-600 mt-1 text-sm">Open Critical Risk NGs &gt; 7 Days</p>
          </div>

          {/* Moderate Risk (Yellow) */}
          <div className="relative bg-white border-l-4 border-yellow-400 p-6 rounded-lg shadow hover:shadow-lg hover:scale-[1.02] transition-transform duration-300">
            <FaShieldAlt className="absolute top-4 right-4 text-yellow-500 text-xl" />
            <h3 className="text-gray-800 font-semibold text-sm">Moderate Risk</h3>
            <div className="text-yellow-500 text-4xl font-bold mt-2">{truckCounts.yellow}</div>
            <p className="text-gray-800 mt-2 text-sm">Yellow Trucks</p>
            <p className="text-gray-600 mt-1 text-sm">Open Medium Risk NGs &gt; 14 Days</p>
          </div>

          {/* Safe (Green) */}
          <div className="relative bg-white border-l-4 border-green-500 p-6 rounded-lg shadow hover:shadow-lg hover:scale-[1.02] transition-transform duration-300">
            <FaCheckCircle className="absolute top-4 right-4 text-green-500 text-xl" />
            <h3 className="text-gray-800 font-semibold text-sm">Safe</h3>
            <div className="text-green-600 text-4xl font-bold mt-2">{truckCounts.green}</div>
            <p className="text-gray-800 mt-2 text-sm">Green Trucks</p>
            <p className="text-gray-600 mt-1 text-sm whitespace-normal leading-snug">
              No Open NGs or Closed Within 15 Days
            </p>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded shadow border mb-30 border-gray-200 max-w-md mx-auto">
          <h3 className="text-lg font-semibold text-brand-dark mb-4 text-center">
            Fleet Safety Proportion
          </h3>
          <div className="flex justify-center">
            <div className="w-56 h-56">
              <Pie data={pieData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Total Trucks: {totalTrucks}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FleetSafety;
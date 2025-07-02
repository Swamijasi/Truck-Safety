// import React from "react";
// import {
//   Chart as ChartJS,
//   BarElement,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar, Pie } from "react-chartjs-2";

// ChartJS.register(
//   BarElement,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend
// );

// const CommonDefect = () => {
//   // Sample NG Point frequency data
//   const frequentNGPoints = [
//     { label: "Brake Issue", count: 34 },
//     { label: "Oil Leak", count: 29 },
//     { label: "Tire Wear", count: 27 },
//     { label: "Steering Fault", count: 24 },
//     { label: "Horn Not Working", count: 20 },
//     { label: "Lights Faulty", count: 19 },
//     { label: "Seat Belt", count: 18 },
//     { label: "Windshield Crack", count: 17 },
//     { label: "Suspension Issue", count: 16 },
//     { label: "Exhaust Smoke", count: 15 },
//   ];

//   const severityDistribution = {
//     red: 120,
//     yellow: 80,
//   };

//   const ngByTruckType = {
//     trailer: 45,
//     heavyDuty: 75,
//     miniTruck: 35,
//     container: 55,
//   };

//   const barData = {
//     labels: frequentNGPoints.map((item) => item.label),
//     datasets: [
//       {
//         label: "Frequency",
//         data: frequentNGPoints.map((item) => item.count),
//         backgroundColor: "#f97316",
//       },
//     ],
//   };

//   const pieData = {
//     labels: ["Red NG Points", "Yellow NG Points"],
//     datasets: [
//       {
//         data: [severityDistribution.red, severityDistribution.yellow],
//         backgroundColor: ["#ef4444", "#facc15"],
//       },
//     ],
//   };

//   const truckCategoryBarData = {
//     labels: Object.keys(ngByTruckType),
//     datasets: [
//       {
//         label: "NG Points",
//         data: Object.values(ngByTruckType),
//         backgroundColor: "#3b82f6",
//       },
//     ],
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto space-y-12">
//         <h2 className="text-2xl font-bold text-brand-dark mb-2">
//           Common Defect Trends (NG Point Analysis)
//         </h2>

//         {/* Top 10 NG Points */}
//         <div className="bg-white p-6 rounded shadow">
//           <h3 className="text-lg font-semibold text-gray-700 mb-4">
//             Top 10 Most Frequent NG Points
//           </h3>
//           <Bar data={barData} />
//         </div>

//         {/* Severity Distribution */}
//         <div className="bg-white p-6 rounded shadow">
//           <h3 className="text-lg font-semibold text-gray-700 mb-4">
//             Severity Distribution (Red vs Yellow NG Points)
//           </h3>
//           <div className="max-w-sm mx-auto">
//             <Pie data={pieData} />
//           </div>
//         </div>

//         NG Points by Truck Category
//         <div className="bg-white p-6 rounded shadow mb-30">
//           <h3 className="text-lg font-semibold text-gray-700 mb-4">
//             NG Points by Truck Category
//           </h3>
//           <Bar data={truckCategoryBarData} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommonDefect;

import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const CommonDefect = () => {
  // Sample NG Point frequency data
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
  ];

  const severityDistribution = {
    red: 120,
    yellow: 80,
  };

  const barData = {
    labels: frequentNGPoints.map((item) => item.label),
    datasets: [
      {
        label: "Frequency",
        data: frequentNGPoints.map((item) => item.count),
        backgroundColor: "#f97316",
      },
    ],
  };

  const pieData = {
    labels: ["Red NG Points", "Yellow NG Points"],
    datasets: [
      {
        data: [severityDistribution.red, severityDistribution.yellow],
        backgroundColor: ["#ef4444", "#facc15"],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-2xl font-bold text-brand-dark mb-2">
          Common Defect Trends (NG Point Analysis)
        </h2>

        {/* Top 10 NG Points */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Top 10 Most Frequent NG Points
          </h3>
          <Bar data={barData} />
        </div>

        {/* Severity Distribution */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Severity Distribution (Red vs Yellow NG Points)
          </h3>
          <div className="max-w-sm mx-auto">
            <Pie data={pieData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonDefect;

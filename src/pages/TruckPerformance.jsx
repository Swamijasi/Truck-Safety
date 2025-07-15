import React, { useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const HeaderWithInfo = ({ label, tooltip }) => (
  <div className="flex items-center gap-1 relative group">
    <span className="font-medium">{label}</span>
    <div className="relative group">
      <InformationCircleIcon className="h-4 w-4 text-gray-500" />
      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 z-50 hidden group-hover:block bg-white text-black text-xs rounded px-2 py-1 whitespace-nowrap border border-gray-300 shadow">
        {tooltip}
      </div>
    </div>
  </div>
);

const trucksData = [
  { 
    TruckNo: "HR124DG3444", 
    VendCode: "K020", 
    Total_Audit: 3, 
    Current_Status: "Green", 
    Average_Submission_Count: 0.3, 
    Lastest_Audit_Open_From: "0 days", 
    history: [ 
      { Def_ID: "AUDIT-1101", Reg_No: "HR2343", Vendor_Code: "K020", Created_Date: "02-Jul-2025", Status: "Green" }, 
      { Def_ID: "AUDIT-1102", Reg_No: "HR2343", Vendor_Code: "K020", Created_Date: "22-Jun-2025", Status: "Yellow" } 
    ] 
  },
  { 
    TruckNo: "HR12CB4433", 
    VendCode: "K021", 
    Total_Audit: 4, 
    Current_Status: "Red", 
    Average_Submission_Count: 1.2, 
    Lastest_Audit_Open_From: "10 days", 
    history: [ 
      { Def_ID: "AUDIT-1103", Reg_No: "HR4433", Vendor_Code: "K021", Created_Date: "01-Jul-2025", Status: "Red" } 
    ] 
  },
  { 
    TruckNo: "HR11AB1234", 
    VendCode: "K022", 
    Total_Audit: 2, 
    Current_Status: "Red", 
    Average_Submission_Count: 0.9, 
    Lastest_Audit_Open_From: "6 days", 
    history: [ 
      { Def_ID: "AUDIT-1151", Reg_No: "HRAB1234", Vendor_Code: "K022", Created_Date: "10-Jun-2025", Status: "Red" } 
    ] 
  },
  { 
    TruckNo: "HR22XY9898", 
    VendCode: "K030", 
    Total_Audit: 5, 
    Current_Status: "Yellow", 
    Average_Submission_Count: 0.5, 
    Lastest_Audit_Open_From: "5 days", 
    history: [ 
      { Def_ID: "AUDIT-1152", Reg_No: "HR9898", Vendor_Code: "K030", Created_Date: "08-Jul-2025", Status: "Yellow" } 
    ] 
  },
  { 
    TruckNo: "HR33XZ4554", 
    VendCode: "K050", 
    Total_Audit: 6, 
    Current_Status: "Green", 
    Average_Submission_Count: 0.2, 
    Lastest_Audit_Open_From: "0 days", 
    history: [ 
      { Def_ID: "AUDIT-1181", Reg_No: "HRX4554", Vendor_Code: "K050", Created_Date: "01-Jul-2025", Status: "Green" } 
    ] 
  },
  { 
    TruckNo: "HR56NN3322", 
    VendCode: "K070", 
    Total_Audit: 1, 
    Current_Status: "Yellow", 
    Average_Submission_Count: 0.8, 
    Lastest_Audit_Open_From: "3 days", 
    history: [ 
      { Def_ID: "AUDIT-1153", Reg_No: "HR3322", Vendor_Code: "K070", Created_Date: "09-Jul-2025", Status: "Yellow" } 
    ] 
  },
  { 
    TruckNo: "HR77TT1122", 
    VendCode: "K090", 
    Total_Audit: 0, 
    Current_Status: "Yellow", 
    Average_Submission_Count: 0.0, 
    Lastest_Audit_Open_From: "7 days", 
    history: [ 
      { Def_ID: "AUDIT-1154", Reg_No: "HR1122", Vendor_Code: "K090", Created_Date: "05-Jul-2025", Status: "Yellow" } 
    ] 
  },
  { 
    TruckNo: "HR88PP5566", 
    VendCode: "K012", 
    Total_Audit: 3, 
    Current_Status: "Green", 
    Average_Submission_Count: 0.6, 
    Lastest_Audit_Open_From: "0 days", 
    history: [ 
      { Def_ID: "AUDIT-1188", Reg_No: "HRPP5566", Vendor_Code: "K012", Created_Date: "28-Jun-2025", Status: "Green" } 
    ] 
  },
  { 
    TruckNo: "HR99MM7788", 
    VendCode: "K034", 
    Total_Audit: 2, 
    Current_Status: "Yellow", 
    Average_Submission_Count: 1.0, 
    Lastest_Audit_Open_From: "4 days", 
    history: [ 
      { Def_ID: "AUDIT-1155", Reg_No: "HR7788", Vendor_Code: "K034", Created_Date: "07-Jul-2025", Status: "Yellow" } 
    ] 
  },
  { 
    TruckNo: "HR10AA5566", 
    VendCode: "K040", 
    Total_Audit: 4, 
    Current_Status: "Red", 
    Average_Submission_Count: 1.8, 
    Lastest_Audit_Open_From: "8 days", 
    history: [ 
      { Def_ID: "AUDIT-1199", Reg_No: "HRAA5566", Vendor_Code: "K040", Created_Date: "15-Jun-2025", Status: "Red" } 
    ] 
  },
];


const TruckPerformance = () => {
  const [selectedTruck, setSelectedTruck] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTrucks = trucksData.filter((truck) =>
    truck.TruckNo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`relative ${selectedTruck ? "overflow-hidden" : ""}`}>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-brand-dark">
              Truck Performance Overview
            </h2>
            <input
              type="text"
              placeholder="Search Truck No..."
              className="px-4 py-2 border rounded-lg text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <table className="min-w-full bg-white rounded shadow overflow-hidden text-sm text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-2 font-medium">Truck No</th>
                <th className="px-4 py-2">
                  <HeaderWithInfo label="Vendor Code" tooltip="Vendor responsible for this Truck" />
                </th>
                <th className="px-4 py-2">
                  <HeaderWithInfo label="Total Audits" tooltip="Total number of safety audits conducted for this Truck" />
                </th>
                <th className="px-4 py-2">
                  <HeaderWithInfo label="Avg Submissions" tooltip="Number of times Declaration Forms were submitted before closing the defects" />
                </th>
                <th className="px-4 py-2">
                  <HeaderWithInfo label="Status" tooltip="Current status of the truck based on open critical or medium defects" />
                </th>
                <th className="px-4 py-2">
                  <HeaderWithInfo label="Last Audit Open" tooltip="Duration since the latest audit was opened" />
                </th>
                <th className="px-4 py-2 font-medium">History</th>
              </tr>
            </thead>
            <tbody>
              {filteredTrucks.map((truck) => (
                <tr key={truck.TruckNo} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 font-medium">{truck.TruckNo}</td>
                  <td className="px-4 py-2">{truck.VendCode}</td>
                  <td className="px-4 py-2">{truck.Total_Audit}</td>
                  <td className="px-4 py-2">{truck.Average_Submission_Count}</td>
                  <td className="px-4 py-2">
                    <span className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${
                      truck.Current_Status === "Green"
                        ? "bg-green-500"
                        : truck.Current_Status === "Yellow"
                        ? "bg-yellow-400 text-black"
                        : "bg-red-500"
                    }`}>
                      {truck.Current_Status}
                    </span>
                  </td>
                  <td className="px-4 py-2">{truck.Lastest_Audit_Open_From}</td>
                  <td className="px-4 py-2">
                    <button
                      className="text-blue-600 font-semibold hover:underline"
                      onClick={() => setSelectedTruck(truck)}
                    >
                      View History
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedTruck && (
        <>
          <div className="fixed inset-0 bg-white bg-opacity-90 z-40"></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded shadow-xl max-w-3xl w-full p-6 overflow-y-auto max-h-[80vh]">
              <h3 className="text-xl font-bold mb-4">
                Audit History - {selectedTruck.TruckNo}
              </h3>

              {selectedTruck.history.length === 0 ? (
                <p className="text-gray-500">No audit history found.</p>
              ) : (
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-100 text-gray-700">
                    <tr>
                      <th className="px-4 py-2">Def ID</th>
                      <th className="px-4 py-2">Reg No</th>
                      <th className="px-4 py-2">Vendor Code</th>
                      <th className="px-4 py-2">Created Date</th>
                      <th className="px-4 py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedTruck.history.map((record, index) => (
                      <tr key={index} className="border-b">
                        <td className="px-4 py-2">{record.Def_ID}</td>
                        <td className="px-4 py-2">{record.Reg_No}</td>
                        <td className="px-4 py-2">{record.Vendor_Code}</td>
                        <td className="px-4 py-2">{record.Created_Date}</td>
                        <td className="px-4 py-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            record.Status === "Green"
                              ? "bg-green-200 text-green-800"
                              : record.Status === "Yellow"
                              ? "bg-yellow-200 text-yellow-800"
                              : "bg-red-200 text-red-800"
                          }`}>
                            {record.Status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              <div className="mt-6 text-right">
                <button
                  className="text-red-500 font-semibold hover:underline"
                  onClick={() => setSelectedTruck(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TruckPerformance;

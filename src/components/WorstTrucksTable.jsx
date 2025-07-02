const WorstTrucksTable = ({ data }) => {
  return (
    <table className="min-w-full bg-white shadow rounded overflow-hidden text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 text-left">Truck ID</th>
          <th className="px-4 py-2">Open NG Points</th>
          <th className="px-4 py-2">Avg. Submissions</th>
          <th className="px-4 py-2">Last Audit</th>
        </tr>
      </thead>
      <tbody>
        {data.map((truck, idx) => (
          <tr key={idx} className="border-t">
            <td className="px-4 py-2">{truck.truckId}</td>
            <td className="px-4 py-2 text-center">{truck.openNG}</td>
            <td className="px-4 py-2 text-center">{truck.avgSubmissions}</td>
            <td className="px-4 py-2 text-center">{truck.lastAuditDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

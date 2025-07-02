const KPIBox = ({ title, value, color }) => {
  const colors = {
    red: "text-red-600 bg-red-100",
    yellow: "text-yellow-600 bg-yellow-100",
    green: "text-green-600 bg-green-100",
  };

  return (
    <div className={`p-4 rounded-lg shadow-md ${colors[color]} flex flex-col items-center`}>
      <p className="text-sm font-medium">{title}</p>
      <h2 className="text-3xl font-bold">{value}</h2>
    </div>
  );
};

export default KPIBox;

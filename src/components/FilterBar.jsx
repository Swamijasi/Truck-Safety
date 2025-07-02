import React from "react";

const FilterBar = ({ filters, setFilters }) => {
  return (
    <div className="bg-white shadow p-4 rounded mb-6 flex flex-wrap gap-4">
      <div>
        <label className="block text-sm font-medium">Start Date</label>
        <input
          type="date"
          value={filters.startDate}
          onChange={(e) =>
            setFilters({ ...filters, startDate: e.target.value })
          }
          className="border px-3 py-2 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">End Date</label>
        <input
          type="date"
          value={filters.endDate}
          onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
          className="border px-3 py-2 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Truck ID</label>
        <input
          type="text"
          value={filters.truckId}
          placeholder="e.g. TRK001"
          onChange={(e) => setFilters({ ...filters, truckId: e.target.value })}
          className="border px-3 py-2 rounded"
        />
      </div>
    </div>
  );
};

export default FilterBar;

import { useState } from "react";
import { EventFilterActions } from "../types/eventFilters";

export default function Filters({
  onSearch,
  onFilter,
  onExport,
  onLive,
}: EventFilterActions) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    onSearch(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = event.target.value;
    if (onFilter) {
      onFilter(selectedFilter);
    }
  };

  const handleExportClick = () => {
    if (onExport) {
      onExport();
    }
  };

  const handleLiveClick = () => {
    if (onLive) {
      onLive();
    }
  };

  return (
    <div className="join w-full">
      <div className="flex space-x-2 w-full">
        <div className="w-full">
          <input
            className="input input-bordered join-item w-full"
            placeholder="Search name, email, or action..."
            value={searchValue}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <select
        className="select select-bordered join-item"
        onChange={handleFilterChange}
        defaultValue={"Filter"}
      >
        <option disabled defaultValue={"Filter"}>
          Filter
        </option>
        <option>Actor</option>
        <option>Action</option>
      </select>
      <button
        className="btn select-bordered btn-ghost join-item"
        onClick={handleExportClick}
      >
        Export
      </button>
      <button
        className="btn select-bordered btn-ghost join-item"
        onClick={handleLiveClick}
      >
        Live
      </button>
    </div>
  );
}

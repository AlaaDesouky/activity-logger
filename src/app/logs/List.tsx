import { useState } from "react";
import Loader from "../components/Loader";
import { useEvents } from "../services/queries";
import EventItem from "./EventItem";
import Filters from "./Filters";
import { GetEventsQuery } from "../types/event";

export default function List() {
  const [query, setQuery] = useState<GetEventsQuery>({ limit: 10 });

  const { data, isLoading, setSize, size } = useEvents(query);

  /**
   * @TODO add debounce logic
   */
  const handleSearch = (value: string) => {
    setQuery((prev) => ({ ...prev, search: value }));
  };

  const handleFilter = (filter: string) => {
    console.log(filter);
  };

  const handleExport = () => {
    console.log("Export clicked");
  };

  const handleLive = () => {
    console.log("Live clicked");
  };

  return (
    <div className="overflow-x-auto container w-full">
      <Filters
        onSearch={handleSearch}
        onFilter={handleFilter}
        onExport={handleExport}
        onLive={handleLive}
      />
      <table className="table table-lg table-pin-rows bg-neutral w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Actor</th>
            <th>Action</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>

        {/* body */}
        <tbody>
          {isLoading && (
            <tr>
              <th colSpan={4}>
                <Loader />
              </th>
            </tr>
          )}
          {data?.map((events) => {
            return events.map((event) => (
              <EventItem key={event.id} event={event} />
            ));
          })}
          {/* Load More */}
          {!isLoading && (
            <tr>
              <th colSpan={4}>
                {data && data[0].length != 0 ? (
                  <button
                    onClick={() => setSize(size + 1)}
                    className="btn btn-block"
                  >
                    Load More
                  </button>
                ) : (
                  <span>No data found</span>
                )}
              </th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

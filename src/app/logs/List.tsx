import Loader from "../components/Loader";
import { useEvents } from "../services/queries";
import EventItem from "./EventItem";
import Filters from "./Filters";

export default function List() {
  const { data, isLoading, setSize, size } = useEvents();

  const handleSearch = (value: string) => {
    console.log(value);
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

  if (isLoading) return <Loader />;

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
          {data?.map((events) => {
            return events.map((event) => (
              <EventItem key={event.id} event={event} />
            ));
          })}
          <tr>
            <th colSpan={4}>
              <button
                onClick={() => setSize(size + 1)}
                className="btn btn-block"
              >
                Load More
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

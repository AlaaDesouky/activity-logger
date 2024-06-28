import Loader from "../components/Loader";
import { useEvents } from "../services/queries";
import EventItem from "./EventItem";

export default function List() {
  const { data, isLoading, setSize, size } = useEvents();

  if (isLoading) return <Loader />;

  return (
    <div className="overflow-x-auto container w-full">
      <table className="table table-lg table-pin-rows bg-neutral">
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

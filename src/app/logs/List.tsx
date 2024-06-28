import Loader from "../components/Loader";
import { useEvents } from "../services/queries";
import EventItem from "./EventItem";

export default function List() {
  const { data, isLoading } = useEvents();

  if (isLoading) return <Loader />;

  return (
    <div className="overflow-x-auto card bg-neutral">
      <table className="table table-pin-rows">
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
        </tbody>
      </table>
    </div>
  );
}

import Loader from "../components/Loader";
import { useEvents } from "../services/queries";

export default function List() {
  const { data, isLoading } = useEvents();

  if (isLoading) return <Loader />;

  return (
    <div>
      {data?.map((events) => {
        return events.map((event) => <div key={event.id}>{event.id}</div>);
      })}
    </div>
  );
}

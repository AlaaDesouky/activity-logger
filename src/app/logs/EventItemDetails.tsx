import { Event } from "../types/event";
import { formatDate } from "@/app/utils/dateHelper";

export default function EventItemDetails({ event }: { event: Event }) {
  return (
    <div className="card shadow-xl w-100">
      <div className="card-body">
        <div className="grid grid-cols-3 gap-2">
          {/* Actor */}
          <div className="mt-1">
            <h2 className="font-bold text-gray-500">ACTOR</h2>
            <div className="flex justify-between mt-2">
              <span className="font-semibold text-gray-400">Name</span>
              <span className="font-semibold text-gray-800">
                {event.actor_name}
              </span>
            </div>
            <div className="flex justify-between mt-1">
              <span className="font-semibold text-gray-400">Email</span>
              <span className="font-semibold text-gray-800">
                {event.target_name}
              </span>
            </div>
            <div className="flex justify-between mt-1">
              <span className="font-semibold text-gray-400">ID</span>
              <span className="font-semibold text-gray-800">
                {event.actor_id}
              </span>
            </div>
          </div>

          {/* Action */}
          <div className="mt-1">
            <h2 className="font-bold text-gray-500">ACTION</h2>
            <div className="flex justify-between mt-2">
              <span className="font-semibold text-gray-400">Name</span>
              <span className="font-semibold text-gray-800">
                {event.action.name}
              </span>
            </div>
            <div className="flex justify-between mt-1">
              <span className="font-semibold text-gray-400">Object</span>
              <span className="font-semibold text-gray-800">
                {event.action.object}
              </span>
            </div>
            <div className="flex justify-between mt-1">
              <span className="font-semibold text-gray-400">ID</span>
              <span className="font-semibold text-gray-800">
                {event.action.id}
              </span>
            </div>
          </div>

          {/* Date */}
          <div className="mt-1">
            <h2 className="font-bold text-gray-500">DATE</h2>
            <div className="flex justify-between mt-2">
              <span className="font-semibold text-gray-400">Readable</span>
              <span className="font-semibold text-gray-800">
                {formatDate(event.occurred_at)}
              </span>
            </div>
          </div>

          {/* Metadata */}
          <div className="mt-5">
            <h2 className="font-bold text-gray-500">METADATA</h2>
            <div className="flex justify-between mt-2">
              <span className="font-semibold text-gray-400">Description</span>
              <span className="font-semibold text-gray-800">
                {event.metadata?.description}
              </span>
            </div>
            <div className="flex justify-between mt-1">
              <span className="font-semibold text-gray-400">Redirect</span>
              <span className="font-semibold text-gray-800">
                {event.metadata?.redirect}
              </span>
            </div>
          </div>

          {/* Target */}
          <div className="mt-5">
            <h2 className="font-bold text-gray-500">TARGET</h2>
            <div className="flex justify-between mt-2">
              <span className="font-semibold text-gray-400">ID</span>
              <span className="font-semibold text-gray-800">
                {event.target_id}
              </span>
            </div>
            <div className="flex justify-between mt-1">
              <span className="font-semibold text-gray-400">Name</span>
              <span className="font-semibold text-gray-800">
                {event.target_name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Event } from "../types/event";
import { formatDate } from "@/app/utils/dateHelper";

export default function EventItemDetails({ event }: { event: Event }) {
  return (
    <div className="card shadow-xl w-100">
      <div className="card-body">
        <div className="flex justify-between">
          <div>
            {/* Actor */}
            <h2 className="card-title">ACTOR</h2>
            <div className="flex items-center justify-between">
              <span>Name</span>
              <span>{event.actor_name}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Email</span>
              <span>{event.target_name}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>ID</span>
              <span>{event.actor_id}</span>
            </div>
          </div>
          {/* Actions */}
          <div>
            <h2 className="card-title">ACTIONS</h2>
            <div className="flex items-center justify-between">
              <span>Name</span>
              <span>{event.action.name}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Object</span>
              <span>{event.action.object}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>ID</span>
              <span>{event.action.id}</span>
            </div>
          </div>
          {/* Date */}
          <div>
            <h2 className="card-title">DATE</h2>
            <div className="flex items-center justify-between">
              <span>Readable</span>
              <span>{formatDate(event.occurred_at)}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          {/* Metadata */}
          <div>
            <h2 className="card-title">METADATA</h2>
            <div className="flex items-center justify-between">
              <span>Description</span>
              <span>{event.metadata.description}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Redirect</span>
              <span>{event.metadata.redirect}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

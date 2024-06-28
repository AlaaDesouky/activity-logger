import { useState } from "react";
import { Event } from "../types/event";
import { formatDate } from "@/utils/dateHelper";

export default function EventItem({ event }: { event: Event }) {
  const [openRow, setOpenRow] = useState<boolean>(false);

  const toggleRow = () => {
    setOpenRow(!openRow);
  };

  return (
    <>
      <tr className="hover">
        {/* Actor */}
        <th>
          <div className="flex items-center gap-3">
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content w-8 rounded-full">
                <span className="text-xs">{event.actor_name[0]}</span>
              </div>
            </div>
            <div className="font-bold">{event.target_name}</div>
          </div>
        </th>

        {/* Action */}
        <th>
          <div className="font-bold">{event.action.name}</div>
        </th>

        {/* Date */}
        <th>{formatDate(event.occurred_at)}</th>

        {/* view more */}
        <th>
          <button className="btn btn-ghost" onClick={() => toggleRow()}>
            &gt;
          </button>
        </th>
      </tr>
      {openRow && (
        <tr>
          <th colSpan={4}>event details</th>
        </tr>
      )}
    </>
  );
}

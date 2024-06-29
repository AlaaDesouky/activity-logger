"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Activity Logs</h1>
      <div className="join">
        <button
          className="btn btn-wide join-item"
          onClick={() => router.push("/logs")}
        >
          View Logs
        </button>
        <button
          className="btn btn-wide join-item"
          onClick={() => router.push("/events")}
        >
          Create Event
        </button>
      </div>
    </div>
  );
}

"use client";
import Loader from "../components/Loader";
import { useCreateEvent } from "../services/mutations";
import { useActions, useActors, useTargets } from "../services/queries";
import { CreateEventPayload } from "../types/event";
import EventForm from "./EventForm";

export default function Events() {
  const { trigger, isMutating } = useCreateEvent();

  const { data: actors, isLoading: isActorsLoading } = useActors();

  const { data: actions, isLoading: isActionsLoading } = useActions();

  const { data: targets, isLoading: isTargetsLoading } = useTargets();

  const handleCreateEvent = (formData: CreateEventPayload) => {
    trigger(formData, {
      rollbackOnError: true,
    });
  };

  if (isActorsLoading || isActionsLoading || isTargetsLoading)
    return <Loader />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Event</h1>
      <EventForm
        actors={actors!}
        actions={actions!}
        targets={targets!}
        isDisabled={isMutating}
        onSubmit={handleCreateEvent}
      />
    </div>
  );
}

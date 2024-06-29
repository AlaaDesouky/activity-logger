import { ChangeEvent, FormEvent, useState } from "react";
import {
  CreateEventPayload,
  EventAction,
  EventActor,
  EventTarget,
} from "../types/event";

interface EventFormProps {
  actors: EventActor[];
  actions: EventAction[];
  targets: EventTarget[];
  isDisabled: boolean;
  onSubmit: (formData: CreateEventPayload) => void;
}

export default function EventForm({
  actions,
  actors,
  targets,
  isDisabled,
  onSubmit,
}: EventFormProps) {
  const [formData, setFormData] = useState<CreateEventPayload>({
    actor_id: "",
    action_id: "",
    target_id: "",
    location: "",
    object: "",
    group: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Actor</span>
        </label>
        <select
          name="actor_id"
          value={formData.actor_id}
          onChange={handleChange}
          className="select select-bordered w-full"
          required
        >
          <option value="" disabled>
            Select Actor
          </option>
          {actors.map((actor) => (
            <option key={actor.id} value={actor.id}>
              {actor.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Action</span>
        </label>
        <select
          name="action_id"
          value={formData.action_id}
          onChange={handleChange}
          className="select select-bordered w-full"
          required
        >
          <option value="" disabled>
            Select Action
          </option>
          {actions.map((action) => (
            <option key={action.id} value={action.id}>
              {action.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Target</span>
        </label>
        <select
          name="target_id"
          value={formData.target_id}
          onChange={handleChange}
          className="select select-bordered w-full"
          required
        >
          <option value="" disabled>
            Select Target
          </option>
          {targets.map((target) => (
            <option key={target.id} value={target.id}>
              {target.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Location</span>
        </label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
      </div>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Object</span>
        </label>
        <input
          type="text"
          name="object"
          value={formData.object}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
      </div>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Group</span>
        </label>
        <input
          type="text"
          name="group"
          value={formData.group}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
      </div>

      <div className="form-control w-full">
        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={isDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

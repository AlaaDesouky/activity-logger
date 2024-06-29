export interface EventAction {
  id: string;
  object: string;
  name: string;
}

export interface EventActor {
  id: string;
  name: string;
}

export interface EventTarget {
  id: string;
  name: string;
}

export interface Event {
  id: string;
  object: string;
  actor_id: string;
  actor_name: string;
  group: string;
  target_id: string;
  target_name: string;
  location: string;
  occurred_at: string;
  action: EventAction;
  metadata: any;
}

export interface CreateEventPayload {
  actor_id: string;
  action_id: string;
  target_id: string;
  group: string;
  location: string;
  object: string;
  metadata?: any;
}

export interface GetEventsQuery {
  limit?: number;
  search?: string;
}

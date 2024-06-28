export interface EventMetaData {
  redirect: string;
  description: string;
  x_request_id: string;
}

export interface EventAction {
  id: string;
  object: string;
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
  metadata: EventMetaData;
}

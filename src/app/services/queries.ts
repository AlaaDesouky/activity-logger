import useSWR from "swr";
import { Health } from "../types/health";
import {
  Event,
  EventAction,
  EventActor,
  EventTarget,
  GetEventsQuery,
} from "../types/event";
import useSWRInfinite, { SWRInfiniteKeyLoader } from "swr/infinite";

export function useHealth() {
  return useSWR<Health>("/health");
}

export function useActors() {
  return useSWR<EventActor[]>("/actor");
}

export function useActions() {
  return useSWR<EventAction[]>("/action");
}

export function useTargets() {
  return useSWR<EventTarget[]>("/target");
}

export function useEvents(query: GetEventsQuery) {
  let queryString = "";
  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value) {
        queryString += `&${key}=${encodeURIComponent(value)}`;
      }
    });
  }

  const getKey: SWRInfiniteKeyLoader = (
    index: number,
    previousPageData: Event[]
  ) => {
    if (previousPageData && !previousPageData.length) return null;

    let url: string = `/event?page=${index + 1}` + queryString;

    return url;
  };

  return useSWRInfinite<Event[]>(getKey);
}

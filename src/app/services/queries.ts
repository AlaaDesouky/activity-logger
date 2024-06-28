import useSWR from "swr";
import { Health } from "../types/health";
import { Event } from "../types/event";
import useSWRInfinite, { SWRInfiniteKeyLoader } from "swr/infinite";

export function useHealth() {
  return useSWR<Health>("/health");
}

export function useEvents() {
  const getKey: SWRInfiniteKeyLoader = (
    index: number,
    previousPageData: Event[]
  ) => {
    if (previousPageData && !previousPageData.length) return null;

    return `/event`;
  };

  return useSWRInfinite<Event[]>(getKey);
}

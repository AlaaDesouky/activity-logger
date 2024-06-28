import useSWR from "swr";
import { Health } from "../types/health";

export function useHealth() {
  return useSWR<Health>("/health");
}

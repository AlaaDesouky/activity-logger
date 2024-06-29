import useSWRMutation from "swr/mutation";
import { useEvents } from "./queries";
import { createEvent } from "./api";

export function useCreateEvent() {
  const { mutate } = useEvents({ limit: 10 });

  return useSWRMutation("/event", createEvent, {
    onError() {
      console.log("error");
    },
    onSuccess() {
      mutate();
    },
  });
}

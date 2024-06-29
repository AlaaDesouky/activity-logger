import { axiosInstance } from "@/app/utils/axios";
import { CreateEventPayload } from "../types/event";

export const createEvent = async (
  url: string,
  { arg }: { arg: CreateEventPayload }
) => {
  await axiosInstance.post(url, { ...arg });
};

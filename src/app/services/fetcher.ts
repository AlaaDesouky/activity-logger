import { axiosInstance } from "@/app/utils/axios";

const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

export default fetcher;

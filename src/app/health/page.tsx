"use client";

import { useHealth } from "../services/queries";

export default function Health() {
  const { data } = useHealth();

  return <>{data?.message}</>;
}

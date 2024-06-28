"use client";

import { ReactNode } from "react";
import { SWRConfig } from "swr";
import fetcher from "./services/fetcher";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
}

import { Health } from "@/app/types/health";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json<Health>(
      {
        message: "server up and running",
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

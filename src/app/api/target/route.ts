import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";
import { EventTarget } from "@/app/types/event";

export async function GET() {
  try {
    const targets = await db.target.findMany();

    return NextResponse.json<EventTarget[]>(targets, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

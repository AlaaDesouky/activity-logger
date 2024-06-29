import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";
import { EventAction } from "@/app/types/event";

export async function GET() {
  try {
    const actions = await db.action.findMany();

    return NextResponse.json<EventAction[]>(actions, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

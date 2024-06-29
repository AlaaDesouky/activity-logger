import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";
import { EventActor } from "@/app/types/event";

export async function GET() {
  try {
    const actors = await db.actor.findMany();

    return NextResponse.json<EventActor[]>(actors, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

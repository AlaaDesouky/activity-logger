import { CreateEventPayload, Event } from "@/app/types/event";
import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../lib/db";

interface Filter {
  OR?: any[];
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const page: number = Number(searchParams.get("page"));
  const limit: number = Number(searchParams.get("limit"));

  const search: string | null = searchParams.get("search");

  let filter: Filter = {};

  if (search) {
    filter["OR"] = [
      {
        actor: {
          OR: [{ name: { contains: search || "" } }],
        },
      },
      {
        action: {
          OR: [{ name: { contains: search || "" } }],
        },
      },
      {
        target: {
          OR: [{ name: { contains: search || "" } }],
        },
      },
    ];
  }

  const take = limit || 1;
  const skip = page ? (page - 1) * take : 0;

  const data = await db.event.findMany({
    where: filter,
    include: {
      actor: true,
      action: true,
      target: true,
    },
    take,
    skip,
  });

  /**
   * @TODO create a generalized mapper utility
   */
  const events: Event[] = data.map((event) => {
    const mappedData: Event = {
      id: event.id,
      object: event.object,
      actor_id: event.actor.id,
      actor_name: event.actor.name,
      group: event.group,
      action: {
        id: event.action.id,
        name: event.action.name,
        object: event.action.object,
      },
      target_id: event.target.id,
      target_name: event.target.name,
      location: event.location,
      occurred_at: event.occurredAt.toISOString(),
      metadata: event.metadata,
    };
    return mappedData;
  });

  try {
    return NextResponse.json<Event[]>(events, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const {
      action_id,
      actor_id,
      group,
      location,
      object,
      target_id,
      metadata,
    }: CreateEventPayload = await request.json();

    /**
     * @Todo add validation for input fields
     */
    const event = await db.event.create({
      data: {
        actionId: action_id,
        actorId: actor_id,
        targetId: target_id,
        group,
        location,
        object,
        metadata: metadata || {},
      },
    });

    return NextResponse.json(
      {
        message: "Event created",
        event,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

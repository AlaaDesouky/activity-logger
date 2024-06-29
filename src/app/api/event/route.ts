import { CreateEventPayload, Event } from "@/app/types/event";
import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../lib/db";

export async function GET() {
  const events: Event[] = [
    {
      id: "evt_15B56WILKW5K",
      object: "event",
      actor_id: "user_3VG74289PUA2",
      actor_name: "Ali Salah",
      group: "instatus.com",
      action: {
        id: "evt_action_PGTD81NCAOQ2",
        object: "event_action",
        name: "user.login_succeeded",
      },
      target_id: "user_DOKVD1U3L030",
      target_name: "ali@instatus.com",
      location: "105.40.62.95",
      occurred_at: "2022-01-05T14:31:13.607Z",
      metadata: {
        redirect: "/setup",
        description: "User login succeeded.",
        x_request_id: "req_W1Y13QOHMI5H",
      },
    },
    {
      id: "evt_16B56WILKW5K",
      object: "event",
      actor_id: "user_3VG74289PUA2",
      actor_name: "Ali Salah",
      group: "instatus.com",
      action: {
        id: "evt_action_PGTD81NCAOQ2",
        object: "event_action",
        name: "user.login_succeeded",
      },
      target_id: "user_DOKVD1U3L030",
      target_name: "ali@instatus.com",
      location: "105.40.62.95",
      occurred_at: "2022-01-05T14:31:13.607Z",
      metadata: {
        redirect: "/setup",
        description: "User login succeeded.",
        x_request_id: "req_W1Y13QOHMI5H",
      },
    },
    {
      id: "evt_17B56WILKW5K",
      object: "event",
      actor_id: "user_3VG74289PUA2",
      actor_name: "Ali Salah",
      group: "instatus.com",
      action: {
        id: "evt_action_PGTD81NCAOQ2",
        object: "event_action",
        name: "user.login_succeeded",
      },
      target_id: "user_DOKVD1U3L030",
      target_name: "ali@instatus.com",
      location: "105.40.62.95",
      occurred_at: "2022-01-05T14:31:13.607Z",
      metadata: {
        redirect: "/setup",
        description: "User login succeeded.",
        x_request_id: "req_W1Y13QOHMI5H",
      },
    },
    {
      id: "evt_18B56WILKW5K",
      object: "event",
      actor_id: "user_3VG74289PUA2",
      actor_name: "Ali Salah",
      group: "instatus.com",
      action: {
        id: "evt_action_PGTD81NCAOQ2",
        object: "event_action",
        name: "user.login_succeeded",
      },
      target_id: "user_DOKVD1U3L030",
      target_name: "ali@instatus.com",
      location: "105.40.62.95",
      occurred_at: "2022-01-05T14:31:13.607Z",
      metadata: {
        redirect: "/setup",
        description: "User login succeeded.",
        x_request_id: "req_W1Y13QOHMI5H",
      },
    },
  ];

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

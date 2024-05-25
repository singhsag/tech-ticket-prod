import { ticketPatchSchema } from "@/ValidationSchemas/ticket";
import prisma from "@/prisma/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import options from "../../auth/[...nextauth]/options";

interface Props {
  params: { id: string };
}

export async function PATCH(request: NextRequest, { params }: Props) {
  const session = await getServerSession(options);

  if (!session) {
    return NextResponse.json({ error: "Not authenticated!" }, { status: 401 });
  }
  const body = await request.json();
  const validation = ticketPatchSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  const ticket = await prisma.ticket.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  if (!ticket) {
    return NextResponse.json({ message: "Ticket not found" }, { status: 400 });
  }

  if (body?.assignedToUserId) {
    body.assignedToUserId = Number(body.assignedToUserId);
  }

  const updateTicket = await prisma.ticket.update({
    where: { id: ticket.id },
    data: {
      ...body,
    },
  });

  return NextResponse.json(updateTicket, { status: 201 });
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const ticket = await prisma.ticket.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  if (!ticket) {
    return NextResponse.json({ message: "Ticket not found" }, { status: 400 });
  }

  await prisma.ticket.delete({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json({ message: "Ticket Deleted." }, { status: 201 });
}

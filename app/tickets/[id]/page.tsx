import prisma from "@/prisma/db";
import React from "react";
import TicketDetails from "./TicketDetails";

interface Props {
  params: { id: string };
}

const ViewTicket = async ({ params }: Props) => {
  const ticket = await prisma.ticket.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  // todo: you might only want tech or admins users to assign ticket
  const users = await prisma.user.findMany();

  if (!ticket) {
    return <p className=" text-destructive">Ticket not found!</p>;
  }

  return (
    <div>
      <TicketDetails ticket={ticket} users={users} />
    </div>
  );
};

export default ViewTicket;

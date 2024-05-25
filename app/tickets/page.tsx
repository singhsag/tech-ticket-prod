import React from "react";
import prisma from "@/prisma/db";
import DataTable from "./DataTable";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Pagination from "@/components/Pagination";
import StatusFilter from "@/components/StatusFilter";
import { Status, Ticket } from "@prisma/client";
import { getServerSession } from "next-auth";
import options from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export type OrderType = "desc" | "asc";

export interface SearchParams {
  status: Status;
  page: string;
  orderBy: keyof Ticket;
  orderType: OrderType;
}

const Tickets = async ({ searchParams }: { searchParams: SearchParams }) => {
  const session = await getServerSession(options);

  if (!session) {
    return <p className=" text-destructive">Please login to view tickets!</p>;
  }

  const pageSize = 10;
  const page = Number(searchParams.page) || 1;

  const orderBy = searchParams.orderBy ? searchParams.orderBy : "createdAt";

  const orderType = searchParams.orderType ? searchParams.orderType : "desc";

  const statuses = Object.values(Status);

  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  let where = {};

  if (status) {
    where = {
      status,
    };
  } else {
    where = {
      NOT: [{ status: "CLOSED" as Status }],
    };
  }

  const ticketCount = await prisma.ticket.count({ where });
  const tickets = await prisma.ticket.findMany({
    where,
    orderBy: {
      [orderBy]: orderType,
    },
    take: pageSize,
    skip: (page - 1) * pageSize,
  });

  return (
    <div>
      <div className="flex gap-2">
        <Link
          href={"tickets/new"}
          className={buttonVariants({ variant: "default" })}
        >
          New Ticket
        </Link>
        <StatusFilter />
      </div>
      <DataTable tickets={tickets} searchParams={searchParams} />
      <Pagination
        itemCount={ticketCount}
        pageSize={pageSize}
        currentPage={page}
      />
    </div>
  );
};

export default Tickets;

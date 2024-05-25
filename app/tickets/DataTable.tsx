import TicketPriority from "@/components/TicketPriority";
import TicketStatusBadge from "@/components/TicketStatusBadge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Ticket } from "@prisma/client";
import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowUp } from "lucide-react";
import { SearchParams } from "./page";
import TicketFilterAndOrder from "@/components/TicketFilterAndOrder";

interface Props {
  tickets: Ticket[];
  searchParams: SearchParams;
}

const DataTable = ({ tickets, searchParams }: Props) => {
  return (
    <div className="w-full mt-5">
      <div className="rounded-md sm:border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <TicketFilterAndOrder
                  filter="title"
                  label="Title"
                  searchParams={searchParams}
                />
              </TableHead>
              <TableHead>
                <div className="flex justify-center">
                  <TicketFilterAndOrder
                    filter="status"
                    label="Status"
                    searchParams={searchParams}
                  />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex justify-center">
                  <TicketFilterAndOrder
                    filter="priority"
                    label="Priority"
                    searchParams={searchParams}
                  />
                </div>
              </TableHead>
              <TableHead>
                <TicketFilterAndOrder
                  filter="createdAt"
                  label="Created At"
                  searchParams={searchParams}
                />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets
              ? tickets.map((ticket) => (
                  <TableRow key={ticket.id} data-href="/">
                    <TableCell>
                      <Link href={`/tickets/${ticket.id}`}>{ticket.title}</Link>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <TicketStatusBadge status={ticket.status} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <TicketPriority priority={ticket.priority} />
                      </div>
                    </TableCell>
                    <TableCell>
                      {ticket.createdAt.toLocaleDateString("en-US", {
                        year: "2-digit",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;

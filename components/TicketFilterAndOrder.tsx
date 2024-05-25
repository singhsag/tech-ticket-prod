"use client";

import { OrderType, SearchParams } from "@/app/tickets/page";
import { ArrowDown, ArrowUp } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  filter: string;
  label: string;
  searchParams: SearchParams;
}

const TicketFilterAndOrder = ({ filter, label, searchParams }: Props) => {
  const [orderType, setOrderType] = useState<OrderType>("desc");
  return (
    <>
      <Link
        href={{ query: { ...searchParams, orderBy: filter, orderType } }}
        onClick={() => setOrderType(orderType === "desc" ? "asc" : "desc")}
      >
        {label}
      </Link>

      {filter === searchParams.orderBy &&
        ("desc" === orderType ? (
          <ArrowDown className=" inline p-1" />
        ) : (
          <ArrowUp className=" inline p-1" />
        ))}
    </>
  );
};

export default TicketFilterAndOrder;

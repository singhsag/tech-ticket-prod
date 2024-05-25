"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MainNavLinks = ({ role }: { role?: string }) => {
  const links = [
    { label: "Dashboard", href: "/", adminOnly: false },
    { label: "Tickets", href: "/tickets", adminOnly: false },
    { label: "Users", href: "/users", adminOnly: true },
  ];

  const currentPath = usePathname();

  return (
    <div className="flex item-center gap-3">
      {links
        .filter((link) => !link.adminOnly || role === "ADMIN")
        .map((link) => (
          <Link
            key={link.label}
            className={`navbar-link ${
              currentPath == link.href &&
              "cursor-default text-primary/70 hover:text-primary/60"
            }`}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
    </div>
  );
};

export default MainNavLinks;

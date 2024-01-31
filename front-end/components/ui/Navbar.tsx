"use client";

import React from "react";
import Logo from "@/components/ui/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./button";
import { ModeToggle } from "./toggle-mode-button";
import { SheetSide } from "./SidebarSheet";

/**
 * Navbar Component
 * Uses Sheet component from ShadCN UI (for sidebar on smaller browser viewpoints)
 * For more info: https://ui.shadcn.com/docs/components/sheet
 */
const Navbar = () => {
  // Keep track of current path
  const currentPath = usePathname();

  // List of possible paths accessible from Navbar
  const links = [
    { label: "Products", href: "/products" },
    { label: "Clients", href: "/clients" },
  ];

  return (
    <header className="fixed top-0 w-full h-16 px-4 md:px-36 border-b shadow-sm bg-background text-foreground z-10" style={{animation: "fade-up 0.5s"}}>
      <nav className="md:max-w-screen-2xl m-auto p-4 w-full justify-between">
        <ul className="flex justify-between items-center">
          <li>
            <div className="flex space-x-2 md:space-x-5">
              <SheetSide />
              <div className="flex m-auto">
                <Logo />
              </div>
            </div>
          </li>
          <div className="flex items-center gap-4">
            <li className="space-x-6 items-center hidden md:flex">
              {links.map((link) => (
                <Link
                  key={link.href}
                  className={classNames({
                    "dark:invert border-b-2 border-zinc-900 text-zinc-900 hover:text-zinc-500 hover:border-zinc-500 transition-colors":
                      link.href === currentPath,
                    "dark:invert text-zinc-900 hover:text-zinc-500":
                      link.href !== currentPath,
                  })}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </li>
            <li>
              <ModeToggle />
            </li>
            <li>
              <Link href="https://github.com/HarshalBhalerao/probable-octo-chainsaw">
                <Button variant="outline" size="icon">
                  <GitHubLogoIcon />
                </Button>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

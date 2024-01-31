"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Separator } from "./separator";
import Logo from "./logo";
import Link from "next/link";

const SHEET_SIDES = ["left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

/**
 * Sheet Component - Customized for website
 * For more info: https://ui.shadcn.com/docs/components/sheet
 */
export function SheetSide() {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <HamburgerMenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-1/3 min-w-fit max-w-fit" side={"left"}>
          <SheetHeader className="scale-125 py-6 justify-center flex items-center">
            <Logo />
          </SheetHeader>
          <Separator />
          <div className="grid gap-4 py-4 px-4 justify-center">
            <div className="grid items-center gap-4 p-4">
              <Link href="/products">Products</Link>
            </div>
            <div className="grid items-center gap-4 p-4">
              <Link href="/clients">Clients</Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

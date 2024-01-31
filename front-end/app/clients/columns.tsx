"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";

/** Note:
 * Columns are where you define the core of what your table will look like.
 * They define the data that will be displayed, how it will be formatted, sorted
 * and filtered. */
export type Clients = {
  id: number;
  name: string;
  email: string;
  amount: number;
  phone: string;
  country: string;
};

// For table columns, contains - key, headers and cell logic
export const columns: ColumnDef<Clients>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       // checked={
  //       //   table.getIsAllPageRowsSelected() ||
  //       //   (table.getIsSomePageRowsSelected() && "indeterminate")
  //       // }
  //       onCheckedChange={(value: any) =>
  //         table.toggleAllPageRowsSelected(!!value)
  //       }
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       // checked={row.getIsSelected()}
  //       onCheckedChange={(value: any) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      const name: string = row.getValue("name");
      return <div className="font-medium">{name}</div>;
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => {
      const email: string = row.getValue("email");
      return <div className="font-medium">{email}</div>;
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
    cell: ({ row }) => {
      const amountData = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD",
      }).format(amountData);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "phone",
    header: "Phone No",
    cell: ({ row }) => {
      const phone: string = row.getValue("phone");
      return <div className="font-medium">{phone}</div>;
    },
  },
  {
    accessorKey: "country",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Country" />
    ),
    cell: ({ row }) => {
      const country: string = row.getValue("country");
      return <div className="font-medium">{country}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const client = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(client.id.toString())
              }
            >
              Copy Client ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem disabled>View Client</DropdownMenuItem>
            <DropdownMenuItem disabled>View Client payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

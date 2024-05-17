"use client";

import { Checkbox } from "@/components/ui/checkbox";

import { ColumnDef } from "@tanstack/react-table";
import {
  Dot,
  Edit,
  Hash,
  Lightbulb,
  LocateFixed,
  MapPinned,
  PhoneCall,
  Trash,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import EditReference from "./EditReference";

export type Reference = {
  id: string;
  name: string;
  mobile: string;
  address: string;
  area: string;
};

export const columns: ColumnDef<Reference>[] = [
  {
    id: "Select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <Column
        icon={<Hash className="size-3" />}
        label="ID"
        onclick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      />
    ),
  },

  {
    accessorKey: "name",
    header: () => <Column icon={<User className="size-3" />} label="Name" />,
  },
  {
    accessorKey: "mobile",
    header: () => (
      <Column icon={<PhoneCall className="size-3" />} label="Mobile" />
    ),
  },
  {
    accessorKey: "address",
    header: () => (
      <Column icon={<MapPinned className="size-3" />} label="Address" />
    ),
  },
  {
    accessorKey: "area",
    header: () => (
      <Column icon={<LocateFixed className="size-3" />} label="Area" />
    ),
  },

  {
    id: "actions",
    header: () => (
      <Column icon={<Lightbulb className="size-3" />} label="Actions" />
    ),
    cell: ({ row }) => {
      const { id }: { id: string } = row.original;

      return (
        <>
          <div className="flex items-center gap-2 justify-end">
            <EditReference />
            <Button size="icon" className="delete-button">
              <Trash className=" size-4" />
            </Button>
          </div>
        </>
      );
    },
  },
];

function Column({
  icon,
  label,
  onclick,
}: {
  icon: React.ReactNode;
  label: string;
  onclick?: () => void;
}) {
  return (
    <div className="flex cursor-pointer items-center gap-1" onClick={onclick}>
      <span className="text-[#5A6272]">{icon}</span>
      <span className="whitespace-nowrap text-xs font-medium text-[#637189]">
        {label}
      </span>
    </div>
  );
}

import React from "react";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import PanelHeader from "@/components/shared/PanelHeader";
import AddBrand from "./_components/AddBrand";
import { Brand, columns } from "./_components/columns";
import { DataTable } from "@/components/shared/DataTable";
import ActiveMenu from "@/components/shared/ActiveMenu";

export const metadata: Metadata = {
  title: "Brand",
};

async function getData(): Promise<Brand[]> {
  return [
    {
      id: "1",
      name: "John Smith",
    },
    {
      id: "2",
      name: "John Smith",
    },
    {
      id: "3",
      name: "John Smith",
    },
    {
      id: "4",
      name: "John Smith",
    },
    {
      id: "5",
      name: "John Smith",
    },
    {
      id: "6",
      name: "John Smith",
    },
    {
      id: "7",
      name: "John Smith",
    },
  ];
}

const BrandPage = async () => {
  const data = await getData();

  return (
    <>
      <ActiveMenu menu="brand" />

      {/* Panel Header */}
      <PanelHeader title="Brand">
        <AddBrand />
      </PanelHeader>

      {/* Brand Table */}
      <DataTable data={data} columns={columns} />
    </>
  );
};

export default BrandPage;

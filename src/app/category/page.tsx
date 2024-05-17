import React from "react";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import PanelHeader from "@/components/shared/PanelHeader";
import AddCategory from "./_components/AddCategory";
import { Category, columns } from "./_components/columns";
import { DataTable } from "@/components/shared/DataTable";
import ActiveMenu from "@/components/shared/ActiveMenu";

export const metadata: Metadata = {
  title: "Category",
};

async function getData(): Promise<Category[]> {
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

const CategoryPage = async () => {
  const data = await getData();

  return (
    <>
      <ActiveMenu menu="category" />

      {/* Panel Header */}
      <PanelHeader title="Category">
        <AddCategory />
      </PanelHeader>

      {/* Category Table */}
      <DataTable data={data} columns={columns} />
    </>
  );
};

export default CategoryPage;

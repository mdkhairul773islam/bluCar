import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AddBrandForm = () => {
  return (
    <form action="">
      <div className="grid gap-6 py-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Brand Name</Label>
          <Input id="name" placeholder="Name" />
        </div>
        <Button type="submit" className="bg-brand">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default AddBrandForm;

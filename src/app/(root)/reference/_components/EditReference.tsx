import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import EditReferenceForm from "./EditReferenceForm";
import { Edit } from "lucide-react";

export default function EditReference() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" className="edit-button">
          <Edit className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Reference</SheetTitle>
          <SheetDescription>
            Add information here. Click save when done.
          </SheetDescription>
        </SheetHeader>

        {/* Edit reference form */}
        <EditReferenceForm />
      </SheetContent>
    </Sheet>
  );
}

import { useState } from "react";
import add from "../../../Icons/add.svg";
import Search from "../../Component/Search";
import ClassModel from "./ClassModel";
import ClassDetails from "./ClassDetails";
export default function Classes() {
  const [open, setOpen] = useState(false);

  return (
    <div className="font-secondary font-medium text-[13px] mr-4">
      <h2 className="font-bold text-[40px]  mt-2 ">Classes</h2>
      <div className="flex justify-between mr-8 mt-6 items-center">
        <Search />
        <div className="relative">
          <button
            onClick={() => setOpen(true)}
            className="w-[218px] h-[55px] rounded-[15px] bg-[var(--color-primary)] flex justify-center items-center"
          >
            <img src={add} className="h-6 w-6" />{" "}
            <span className="text-[16px] ml-1.5">Add New Class</span>
          </button>
          {open && <ClassModel isOpen={open} onClose={() => setOpen(false)} />}
        </div>
      </div>
      <ClassDetails />
    </div>
  );
}

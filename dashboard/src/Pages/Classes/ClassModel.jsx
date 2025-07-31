import { useEffect, useRef } from "react";

import add from "../../../Icons/add.svg";
import Times from "./Times";

export default function ClassModel({ isOpen, onClose }) {
  const classRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (classRef.current && !classRef.current.contains(event.target)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return (
    <div ref={classRef}
          className="absolute right-0 mt-3 mr-10 bg-[#1E1E1E] text-white rounded-[15px] shadow-lg p-5 w-[714px] h-auto z-50"
    // className="w-4/5"
    >
      <div>
        <input placeholder="Enter New Class Title" type="text" name="" id="" />
        <div>
          <span>Availability:</span>
          <Times />
        </div>
      </div>
      <textarea placeholder="Description..." name="" id=""></textarea>
      <div>
        <input
          placeholder="Banner"
          type="text"
          className="border border-[var(--color-white)]/15 rounded-[15px] w-1/3"
        />
        <input
          placeholder="Image1"
          type="text"
          className="border border-[var(--color-white)]/15 rounded-[15px] w-1/3"
        />
        <input
          placeholder="Image2"
          type="text"
          className="border border-[var(--color-white)]/15 rounded-[15px] w-1/3"
        />
      </div>
      <button className="w-[124px] h-[55px] rounded-[15px] bg-[var(--color-primary)] flex justify-center items-center">
        <img src={add} className="h-6 w-6" />{" "}
        <span className="text-[16px] ml-1.5">Add New Class</span>
      </button>
    </div>
  );
}
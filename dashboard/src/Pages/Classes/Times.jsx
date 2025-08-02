import { useEffect, useState, useRef } from "react";
import image from "../../../Icons/sort-down.png";

export default function Times({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const times = ["7AM - 9AM", "9AM - 12PM", "12PM - 4PM"];
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const validateFormat = (input) => {
    const formatRegex = /^\d{1,2}(AM|PM)\s-\s\d{1,2}(AM|PM)$/;
    return formatRegex.test(input.trim());
  };

  const handleSelect = (time) => {
    // setIsTime(time);
    onChange(time);
    setIsOpen(false);
  };
  return (
    <div className="font-medium text-xl flex gap-2 font-secondary">
      <div ref={containerRef}>
        <div className="dropdown-container relative w-[223px] h-[55px] rounded-xl bg-[var(--color-darker)] flex justify-between items-center px-4 ">
          <div className="dropdown flex">
            <input
              value={value}
              onChange={(e) => onChange(e.target.value)}
              onBlur={() => {
                if (!validateFormat(value)) {
                  alert("Invalid time format. Use format like '12PM - 3PM'");
                  setTimeout(() => {
                    inputRef.current?.focus();
                  }, 0);
                }
              }}
              ref={inputRef}
              type="text"
              // value={isTime}
              className="bg-transparent w-full focus:outline-none text-[18px] "
              placeholder="Select or type time"
            />
            <img
              className={`w-6 h-6 cursor-pointer transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              src={image}
              alt="toggle"
            />
          </div>
        </div>
        {isOpen && (
          <div className="absolute mt-3 rounded-2xl">
            {times.map((time, index) => {
              return (
                <div
                  className="dropdown bg-[var(--color-darker)] w-[223px] px-4 py-3 hover:border-[var(--color-primary)] hover:border-2  border-dashed hover:border-rounded-2xl cursor-pointer"
                  key={index}
                  onClick={() => handleSelect(time)}
                >
                  {time}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

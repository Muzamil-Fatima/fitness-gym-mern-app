import { useEffect, useState } from "react";
import image from "../../images/sort-down.png";

export default function Times() {
  const [isOpen, setIsOpen2] = useState(false);
  const [isTime, setIsTime] = useState("Select Time");
  const times = ["7AM - 9AM", "9AM - 12PM", "12PM - 4PM"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsOpen2(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="font-medium text-xl flex gap-2 font-secondary">
      <div>
        <div className="dropdown w-[177px] h-[55px] rounded-xl bg-[var(--color-darker)] flex justify-between items-center px-4 ">
          {isTime}
          <img
            className={`w-6 h-6 cursor-pointer transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => setIsOpen2(!isOpen)}
            src={image}
            alt="toggle"
          />
        </div>
        {isOpen && (
          <div className="mt-3 rounded-2xl">
            {times.map((time, index) => {
              return (
                <div
                  className="dropdown bg-[var(--color-darker)] w-[223px] px-4 py-3 hover:border-[var(--color-primary)] hover:border-2  border-dashed hover:border-rounded-2xl cursor-pointer"
                  key={index}
                  onClick={() => {
                    setIsTime(time);
                    setIsOpen2(false);
                  }}
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

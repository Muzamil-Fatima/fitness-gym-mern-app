import { useEffect, useState } from "react";
import image from "../../images/sort-down.png";

export default function DropDown() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [selected, setSelected] = useState("Select any Option ");
  const options = [
    "12 sessions - AED 2210",
    "8 sessions - AED 1520",
    "1 session - AED 250",
    "16 sessions - AED 2580",
  ];

  const [isOpen2, setIsOpen2] = useState(false);
  const [isTime, setIsTime] = useState("Select Time");
  const times = ["7AM - 9AM", "9AM - 12PM", "12PM - 4PM"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsOpen1(false);
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
        <div className="dropdown w-[370px] h-[55px] rounded-xl bg-[var(--color-darker)] flex justify-between items-center px-4">
          {selected}
          <img
            className={` w-6 h-6 cursor-pointer transition-transform duration-300 ${
              isOpen1 ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => setIsOpen1(!isOpen1)}
            src={image}
            alt="toggle"
          />
        </div>
        {isOpen1 && (
          <div className="mt-3 rounded-2xl">
            {options.map((option, index) => {
              return (
                <div
                  className=" dropdown bg-[var(--color-darker)] w-[370px] px-4 py-3 hover:border-[var(--color-primary)] hover:border-2  border-dashed hover:rounded-2xl cursor-pointer"
                  key={index}
                  onClick={() => {
                    setSelected(option);
                    setIsOpen1(false);
                  }}
                >
                  {option}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div>
        <div className="dropdown w-[220px] h-[55px] rounded-xl bg-[var(--color-darker)] flex justify-between items-center px-4 ">
          {isTime}
          <img
            className={`w-6 h-6 cursor-pointer transition-transform duration-300 ${
              isOpen2 ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => setIsOpen2(!isOpen2)}
            src={image}
            alt="toggle"
          />
        </div>
        {isOpen2 && (
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

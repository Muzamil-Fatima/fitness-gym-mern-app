import arrowImage from "../../../images/top-bottom-arrow.jpg";
import { useState, useEffect } from "react";
import ArrowColumn from "../../Components/ArrowColumn";
export default function Services() {
  const [services, setServices] = useState([]);

  const url = "http://localhost:3000/services";
  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    try {
      let response = await fetch(url);
      response = await response.json();
      setServices(response);
    } catch (error) {
      console.log("Error Fetching users:", error);
    }
  };
  const total = services.length;
  const mid = Math.ceil(total / 2);
  const leftColumn = services.slice(0, mid);
  const rightColumn = services.slice(mid);
  return (
    <div className="font-secondary">
      <div className="flex">
        <h2 className="font-primary font-bold text-[51px]">
          My <span className="text-[var(--color-primary)]">Services</span>
        </h2>
        <img src={arrowImage} alt="Arrow-icon" className="w-lg ml-24" />
      </div>
      <div className="grid grid-cols-8 mt-3">
        <div className="col-span-3">
          {leftColumn.map((service) => (
            <div
              key={service.id}
              className="flex font-normal text-[32px] mt-8 mb-8"
            >
              <span className="h-[130px] w-[130px] rounded-[50%] bg-[var(--color-black)]">
                <img
                  src={service.icon}
                  alt="icon"
                  className="w-[155px] h-[108px]"
                />
              </span>
              <h3 className="ml-3">{service.title}</h3>
            </div>
          ))}
        </div>
        <div className="flex justify-center col-span-2">
          <ArrowColumn />
        </div>
        <div className="col-span-3">
          {rightColumn.map((service) => (
            <div
              key={service.id}
              className="flex font-normal text-[32px] mt-8 mb-8"
            >
              <span className="h-[130px] w-[130px] rounded-[50%] bg-[var(--color-black)]">
                <img
                  src={service.icon}
                  alt="icon"
                  className="w-[155px] h-[108px]"
                />
              </span>
              <h3 className="ml-3">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center m-6">
        <button className="h-[70px] w-[200px]  border-2 border-dashed border-[var(--color-primary)] rounded-[14px] m-2 hover:bg-[var(--color-primary)] hover:border-none">
          Learn More
        </button>
      </div>
    </div>
  );
}

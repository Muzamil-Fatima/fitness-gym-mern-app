import ArrowRow from "../../Components/ArrowRow";
import ArrowColumn from "../../Components/ArrowColumn";
import Consultation from "../../Components/Consultation";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function MyServices() {
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
    <div className="w-11/12 m-auto ">
      <div>
        <h5 className="font-[Hanson] font-bold text-[64px] mt-12 mb-0">
          My <span className="mt-0 text-[var(--color-primary)]">Services</span>
        </h5>
        <ArrowRow />
      </div>
      <div className="grid grid-cols-8 mt-3 font-secondary">
        <div className="col-span-3">
          {leftColumn.map((service) => (
            <div
              key={service.id}
              className="flex font-normal text-[32px] mt-8 mb-8 justify-center items-center"
            >
              <div className="w-1/3">
                <img
                  src={service.image}
                  alt="icon"
                  className="w-[136px] h-[136px] rounded-[50%]"
                />
              </div>
              <div className="w-2/3">
                <NavLink to={`/services/${service.id}`}>
                  <h3 className="ml-3 text-[32px]">{service.title}</h3>
                </NavLink>
              </div>
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
              className="flex font-normal text-[32px] mt-8 mb-8 justify-center items-center"
            >
              <div className="w-1/3">
                <img
                  src={service.image}
                  alt="icon"
                  className="w-[136px] h-[136px] rounded-[50%]"
                />
              </div>
              <div className="w-2/3">
                <NavLink to={`/services/${service.id}`}>
                  <h3 className="ml-3 text-[32px]">{service.title}</h3>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="opacity-25 mt-40" />
      <div className="h-64"></div>
      <div className="h-64"></div>
      <div className="h-64"></div>
      <div className="m-20">
        <Consultation />
      </div>
    </div>
  );
}

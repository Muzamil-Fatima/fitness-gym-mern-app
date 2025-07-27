import { useState, useEffect } from "react";
import ArrowRow from "../../Components/ArrowRow";

export default function ServicesDetails() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error fetching services:", err));
  }, []);
  return (
    <>
      {services.map((service) => (
        <div>
          <div className="m-20">
            <div>
              <h2 className="font-primary font-bold text-[64px]">
                {service.title}
              </h2>
              <ArrowRow />
            </div>
            <div className="grid grid-cols-2 gap-4 font-secondary mt-14">
              <p className="opacity-50">{service.description}</p>
              <img src={service.image} alt="" className="h-[397px] w-full" />
            </div>
          </div>
          <div className="border-[1.5px] border-dashed border-[var(--color-primary)] w-full"></div>
        </div>
      ))}
    </>
  );
}

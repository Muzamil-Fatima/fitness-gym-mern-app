import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../Utils/api";
import ArrowRow from "../../Components/ArrowRow";
import Consultation from "../../Components/Consultation";

export default function Classes() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/classes`);
        setClasses(res.data.data);
      } catch (error) {
        alert("Error: " + (error.response?.data?.message || error.message));
      }
    };
    fetchClasses();
  }, []);
  const total = classes.length;
  const mid = Math.ceil(total / 2);
  const leftSlice = classes.slice(0, mid);
  const rightSlice = classes.slice(mid);
  if (classes.length === 0)
    return <div className="text-white text-xl">Loading...</div>;
  return (
    <div className="w-11/12 m-auto ">
      <div className="text-[var(--color-white)] font-primary">
        <div>
          <h2 className="text-6xl mt-16">
            Training{" "}
            <span className="text-[var(--color-primary)]">Classes</span>
          </h2>
          <ArrowRow />
        </div>
        <div className="flex flex-wrap">
          {leftSlice.map((cls) => (
            <div key={cls.id} className="w-1/2">
              <img
                src={`${BASE_URL}/${cls.classBanner}`}
                alt=""
                className="w-[555px] h-[397px] m-4"
              />
              <NavLink
                to={`/training-classes/${cls.classSlug}`}
                className="text-[32px] font-[Hanson] underline font-bold m-4"
              >
                {cls.classTitle}
              </NavLink>
            </div>
          ))}
          {rightSlice.map((cls) => (
            <div key={cls.id} className="w-1/2">
              <img
                src={`${BASE_URL}/${cls.classBanner}`}
                alt=""
                className="w-[555px] h-[397px] m-4"
              />
              <NavLink
                to={`/training-classes/${cls.classSlug}`}
                className="text-[32px] font-[Hanson] underline font-bold m-4"
              >
                {cls.classTitle}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <div className="m-20">
        <Consultation />
      </div>
    </div>
  );
}

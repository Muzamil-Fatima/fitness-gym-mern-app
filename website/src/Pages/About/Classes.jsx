import ArrowRow from "../../Components/ArrowRow";
import women6 from "../../../images/women6.png";
import women7 from "../../../images/women7.png";
import women9 from "../../../images/women9.png";
import women8 from "../../../images/women8.png";
import Consultation from "../../Components/Consultation";
import { Outlet, NavLink } from "react-router-dom";

export default function Classes() {
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

        <div className="flex">
          <div className="w-1/2">
            <img src={women6} alt="" className="w-[555px] h-[397px] m-4" />
            <NavLink
              to="strength-power-training"
              className="text-[32px] font-[Hanson] underline font-bold m-4"
            >
              Strength Power <div className="ml-4">Training</div>
            </NavLink>
          </div>
          <div className="w-1/2">
            <img src={women7} alt="" className="w-[555px] h-[397px] m-4" />
            <NavLink
              to="weight-loss-training"
              className="text-[32px] font-[Hanson] underline font-bold m-4"
            >
              Weight Loss
            </NavLink>
          </div>
        </div>

        <div className="flex">
          <div className="w-1/2">
            <img src={women8} alt="" className="w-[555px] h-[397px] m-4" />
            <NavLink
              to="functional-training"
            className="text-[32px] font-[Hanson] underline font-bold m-4"
            >
              Functional Training
            </NavLink>
          </div>
          <div className="w-1/2">
            <img src={women9} alt="" className="w-[555px] h-[397px] m-4" />
            <NavLink
              to="online-training"
            className="text-[32px] font-[Hanson] underline font-bold m-4"
            >
              Online Training
            </NavLink>
          </div>
        </div>
      </div>
      <div className="m-20">
        <Consultation />
      </div>
    </div>
  );
}
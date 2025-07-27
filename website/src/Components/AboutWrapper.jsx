import sortUp from "../../images/sort-up.png";
import click from "../../images/click.svg";
import ticks from "../../images/tickw.svg";
import women3 from "../../images/women3.jpg";
import ArrowRow from "../Components/ArrowRow";
import { useState } from "react";

export default function AboutWrapper({
  showArrow = false,
  showButton = false,
  bgColor = false,
}) {
  const [button, setButton] = useState(false);
  return (
    <div
      className={`grid grid-cols-2 font-secondary font-normal text-xl  mt-20 pr-6 rounded-2xl
        transition-all duration-300 overflow-hidden ${
          button ? "max-h-[100px]" : "auto"
        }
    ${bgColor ? "bg-[var(--color-primary)]" : ""}
    `}
    >
      <div className="p-4 rounded-xl">
        {showButton && (
          <button
            onClick={() => {
              setButton(!button);
            }}
            style={{ height: setButton ? "auto" : "127px" }}
            className={`absolute right-18 ${
              button ? "rotate-180" : "rotate-0"
            }`}
          >
            <img src={sortUp} alt="toggle" />
          </button>
        )}
        <h2 className="font-bold font-primary text-[43px] mb-8">About Me</h2>
        {showArrow && (
          <div className="mb-8">
            <ArrowRow />
          </div>
        )}
        {!button && (
          <div className="">
            <p className="text-[27px] font-medium">
              Hi, I'm Lenka. Your Fitness Coach! 👋
            </p>
            <p className="font-normal text-[18px] mt-3 mb-3">
              With over{" "}
              <span className="font-semibold">10 years of experience</span>, I
              specialize in helping clients achieve their goals through
              personalized fitness plans.
            </p>
            <div className="">
              <div className="flex mb-5">
                <img src={click} className="w-[39px] h-[47px]" />
                <img src={ticks} className="w[27px] h-9 absolute ml-2 mb-6" />
                <p className="ml-2 mt-2">European Certified</p>
              </div>
              <div className="flex mb-5">
                <img src={click} className="w-[39px] h-[47px]" />
                <img src={ticks} className="w[27px] h-9 absolute ml-2 mb-6" />
                <p className="ml-2 mt-2">Powerlifter - 52kg IPF</p>
              </div>
              <div className="flex mb-5">
                <img src={click} className="w-[39px] h-[47px]" />
                <img src={ticks} className="w[27px] h-9 absolute ml-2 mb-6" />
                <p className="ml-2 mt-2">Strength Coach</p>
              </div>
            </div>
          </div>
        )}
      </div>
      {!button && (
        <div className="">
          <img src={women3} alt="women" className="" />
        </div>
      )}
    </div>
  );
}

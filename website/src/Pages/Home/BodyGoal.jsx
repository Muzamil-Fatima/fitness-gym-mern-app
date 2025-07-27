import women2 from "../../../images/women2.png";
import subtracts from "../../../images/subtracts.svg";
import click from "../../../images/click.svg";
import tick from "../../../images/tick.svg";
import subtract from "../../../images/subtract.svg";
import arrowUp from "../../../images/arrow-up.svg";
export default function BodyGoal() {
  return (
    <div className="grid grid-cols-2 font-secondary font-normal text-xl  mt-20 pr-6">
      <div>
        <img src={women2} alt="women"/>
      </div>
      <div className="relative flex flex-col justify-center pr-8 pl-12 flex-wrap">
        <img
          src={subtracts}
          alt="subtracts icon"
          className="w-6 h-6 flex absolute top-2 right-4"
        />
        <h2 className="font-primary font-bold text-5xl">
          <span className="block"> Reach Your</span>
          <span className="block">
            body
            <span className="text-[var(--color-primary)]"> Goals</span>
          </span>
        </h2>
        <p className="opacity-50 mb-6 mt-6 ">
          Personalized Training & Nutrition Plans Designed to Perfectly Align
          with Your Lifestyle, Fitness Goals, and Daily Routine for Sustainable
          Results
        </p>
        <div className="">
          <div className="flex mb-5">
            <img src={click} className="w-[39px] h-[47px]" />
            <img src={tick} className="w[27px] h-9 absolute ml-2 mb-6" />
            <p className="ml-2 mt-2">Certified Personal Trainer</p>
          </div>
          <div className="flex mb-5">
            <img src={click} className="w-[39px] h-[47px]" />
            <img src={tick} className="w[27px] h-9 absolute ml-2 mb-6" />
            <p className="ml-2 mt-2">Customized Workout & Diet Plans</p>
          </div>
          <div className="flex mb-5">
            <img src={click} className="w-[39px] h-[47px]" />
            <img src={tick} className="w[27px] h-9 absolute ml-2 mb-6" />
            <p className="ml-2 mt-2">100+ Client Transformations</p>
          </div>
          <div className="flex mb-5">
            <img src={click} className="w-[39px] h-[47px]" />
            <img src={tick} className="w[27px] h-9 absolute ml-2 mb-6" />
            <p className="ml-2 mt-2">Train Anytime, Anywhere</p>
          </div>
        </div>
        <div className=" border-1 border-var(--color-white)] h-12 w-[299px] mb-6 rounded-2xl">
          <button className="flex gap-10 py-3 pl-2 text-[16px]">
            BOOK A FREE CONSULTANT <img src={arrowUp} alt="ap-arrow" />
          </button>
        </div>
        <img src={subtract} alt="subtract icon" className="w-6 h-6" />
      </div>
    </div>
  );
}

import ArrowRow from "../../Components/ArrowRow";
import women4 from "../../../images/women4.png";

export default function Question() {
  return (
    <div className="font-secondary grid grid-cols-2 ml-14">
      <div className="">
        <div className="">
          <p className="text-5xl font-semibold flex-wrap flex-col flex">
            <span className="">
              {" "}
              <span className="text-[var(--color-primary)]">
                Have Questions
              </span>{" "}
              or want to get in{" "}
            </span>
            <span className="block">touch with us?</span>
          </p>
        </div>
        <ArrowRow />
        <div>
          <p className="opacity-50 font-medium text-xl mt-6">
            We'd love to hear from you! Feel free to reach out through any of
            the following methods.
          </p>
        </div>
      </div>
      <div className="relative mt-8 flex flex-wrap overflow-hidden">
        <img src={women4} alt="women" className="w-[624px] h-[450px]" />
        <div className="absolute top-0 right-[-10px] h-full w-[2px] border-r-2 border-dashed border-gray-400"></div>
      </div>
      <hr className=""></hr>
    </div>
  );
}

import ArrowRow from "../../Components/ArrowRow";
import Consultation from "../../Components/Consultation";
import DropDown from "../../Components/DropDown";
import BookNow from "./BookNow";

export default function PageWrapper({
  title1,
  title2,
  para1,
  para2,
  para3,
  para4,
  image1,
  image2,
}) {
  return (
    <div className="w-11/12 m-auto ">
      <div>
        <h3 className="font-primary font-bold text-[64px] mt-12 mb-0">
          <span className="block">{title1}</span>
          <span className="block mt-0 text-[var(--color-primary)]">
            {title2}
          </span>
        </h3>
        <ArrowRow />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8 mb-12">
        <div className="">
          <div className="mb-8">
            <DropDown />
          </div>
          <span className="font-secondary text-[64px] font-semibold uppercase">
            1 HOUR
          </span>
          <h4 className="font-secondary font-medium text-2xl uppercase mt-8 mb-8">
            LOCATION: IN PERSON (DUBAI)
          </h4>
          <div className="text-xl font-normal font-secondary opacity-50 space-y-2">
            <p className="mt-4 mb-6">{para1}</p>
            <p>{para2}</p>
            <p className="mt-6 mb-6">{para3}</p>
            <p>{para4}</p>
          </div>
        </div>
        <div>
          <img
            src={image1}
            alt={title1 + title2}
            className="w-[555px] h-[397px] m-4"
          />
          <img
            src={image2}
            alt={title1 + title2}
            className="w-[576px] h-[304px] m-4"
          />
        </div>
        <BookNow />
      </div>
      <div className="m-20">
        <Consultation />
      </div>
    </div>
  );
}

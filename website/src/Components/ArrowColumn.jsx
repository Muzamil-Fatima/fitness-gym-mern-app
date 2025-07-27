import arrowDown from "../../images/arrowColorDown.svg";
export default function ArrowColumn() {
  return (
    <div className="flex items-center justify-center w-[30%] h-auto relative">
      <div className="w-[1px] bg-gray-300 h-full opacity-50 absolute left-0"> </div>
      <div className="flex flex-col items-center justify-center">
        <img src={arrowDown} alt="downarrow" className="w-9 h-9 my-14" />
        <img src={arrowDown} alt="downarrow" className="w-9 h-9 my-14" />
        <img src={arrowDown} alt="downarrow" className="w-9 h-9 my-14" />
      </div>
      <div className="w-[1px] bg-gray-300 h-full opacity-50 absolute right-0"></div>
    </div>
  );
}

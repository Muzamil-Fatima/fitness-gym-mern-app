import arrowDown from "../../images/arrowColorDown.svg";
export default function ArrowRow() {
  return (
    <div className="my-2 mx-0">
      <hr className="opacity-20 items-center w-48" />
      <div className="flex gap-4 m-2">
        <img
          src={arrowDown}
          alt="downarrow"
          className="mx-3.5 my-3 h-2 -rotate-90"
        />
        <img
          src={arrowDown}
          alt="downarrow"
          className="mx-3.5 my-3 h-2 -rotate-90"
        />
        <img
          src={arrowDown}
          alt="downarrow"
          className="mx-3.5 my-3 h-2 -rotate-90"
        />
      </div>
      <hr className="opacity-20 line-length w-48" />
    </div>
  );
}

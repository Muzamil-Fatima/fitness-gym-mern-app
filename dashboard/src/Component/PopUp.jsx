import Yes from "../../Icons/yes.svg";
import no from "../../Icons/no.svg";
export default function PopUp() {
  return (
    <div className="w-[266px] h-[146px] flex  flex-col justify-center items-center text-[13px] border-2 rounded-xl border-[var(--color-white)]">
      <p className="font-extrabold">Are you sure?</p>
      <p className="font-medium mt-3 mb-3 ">
        <span className="block"> Are you sure you want to</span> delete these{" "}
        <span className="font-bold ">(9)</span> clients?
      </p>
      <div className="font-medium gap-1.5 flex flex-row">
        <button className="w-[85px] h-[30px] rounded-[4px] border-[0.6px] flex justify-center items-center border-[var(--color-red)] bg-opacity-20">
          <img src={Yes} alt="Yes" className="mr-2" />
          Yes
        </button>
        <button className="w-[85px] h-[30px] rounded-[4px] border-[0.6px] flex justify-center items-center border-[var(--color-gray)] bg-opacity-20">
          <img src={no} alt="No" className="mr-2" />
          No
        </button>
      </div>
    </div>
  );
}

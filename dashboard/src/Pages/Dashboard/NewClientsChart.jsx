import next from "../../../Icons/next.svg";
import appointment from "../../../Icons/appointment.svg";
export default function NewClientChart() {
  return (
    <div className="">
      <div className="flex justify-between mb-4 px-2">
        <h2 className="font-semibold text-2xl">New Clients</h2>
        <div className="flex gap-1 items-center">
          <p className="font-normal text-[14px]">More</p>
          <img src={next} className="w-3.5 h-3.5" />
        </div>
      </div>
      <div>
        <div className="text-[15px] font-medium">
          <button className="flex justify-center items-center w-[99px] h-[43px] border-[1px] border-[var(--color-white)]/15 rounded-4xl hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]">
            Today
          </button>
          <button className="flex justify-center items-center w-[99px] h-[43px] border-[1px] border-[var(--color-white)]/15 rounded-4xl hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]">
            7 Days
          </button>
          <button className="flex justify-center items-center w-[99px] h-[43px] border-[1px] border-[var(--color-white)]/15 rounded-4xl hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]">
            30 Days
          </button>
          <div>
            <button className="flex justify-center items-center w-[125px] h-[43px] border-[1px] border-[var(--color-white)]/15 rounded-4xl hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]">
              <img src={appointment} className="w-[17px] h-[17px]" />
              Custom
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

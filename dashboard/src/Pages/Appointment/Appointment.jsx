import Search from "../../Component/Search";
import pending from "../../../Icons/pending.svg";
import add from "../../../Icons/add.svg";

export default function Appointment() {
  return (
    <>
      <h2 className="font-bold text-[40px] font-secondary mt-4">
        Appointments
      </h2>
      <Search />
      <div>
        <button className="w-[156px] h-[55px] rounded-[15px] bg-[#FF9500] flex justify-center items-center">
          <img src={pending} className="h-6 w-6" />{" "}
          <span className="text-[16px] ml-1.5">Pending</span>
        </button>
        <button className="w-[229px] h-[55px] rounded-[15px] bg-[var(--color-primary)] flex justify-center items-center">
          <img src={add} className="h-6 w-6" />{" "}
          <span className="text-[16px] ml-1.5">New Appointment</span>
        </button>
      </div>
    </>
  );
}

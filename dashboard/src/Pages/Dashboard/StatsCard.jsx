// (for total clients, appointments, classes, services).
import client from "../../../Icons/client.svg";
import appointment from "../../../Icons/Appointment.svg";
import classes from "../../../Icons/classes.svg";
import services from "../../../Icons/services.svg";
export default function StatsCard() {
  return (
    <div className="font-secondary flex justify-between mr-16 mt-3">
      <div className="rounded-[20px] bg-[var(--color-darker)] w-[22%] px-4">
        <div className="flex justify-between py-4">
          <div className="w-[57px] h-[55px] rounded-[15px] bg-[var(--color-white)]/20 flex justify-center items-center">
            <img src={client} alt="" className="h-[42px] w-[42px]" />
          </div>
          <p className="font-black text-[32px]">52</p>
        </div>
        <p className="text-[12px] font-semibold p-2">Total Clients</p>
      </div>
      <div className="rounded-[20px] bg-[var(--color-darker)] w-[22%] px-4">
        <div className="flex justify-between py-4">
          <div className="w-[57px] h-[55px] rounded-[15px] bg-[var(--color-white)]/20 flex justify-center items-center">
            <img src={appointment} alt="" className="h-[42px] w-[42px]" />
          </div>
          <p className="font-black text-[32px]">6</p>
        </div>
        <p className="text-[12px] font-semibold p-2">Upcoming Appointments</p>
      </div>
      <div className="rounded-[20px] bg-[var(--color-darker)] w-[22%] px-4">
        <div className="flex justify-between py-4">
          <div className="w-[57px] h-[55px] rounded-[15px] bg-[var(--color-white)]/20 flex justify-center items-center">
            <img src={classes} alt="" className="h-[42px] w-[42px]" />
          </div>
          <p className="font-black text-[32px]">4</p>
        </div>
        <p className="text-[12px] font-semibold p-2">Total Classes</p>
      </div>
      <div className="rounded-[20px] bg-[var(--color-darker)] w-[22%] px-4">
        <div className="flex justify-between py-4">
          <div className="w-[57px] h-[55px] rounded-[15px] bg-[var(--color-white)]/20 flex justify-center items-center">
            <img src={services} alt="" className="h-[42px] w-[42px]" />
          </div>
          <p className="font-black text-[32px]">12</p>
        </div>
        <p className="text-[12px] font-semibold p-2">Total Services</p>
      </div>
    </div>
  );
}

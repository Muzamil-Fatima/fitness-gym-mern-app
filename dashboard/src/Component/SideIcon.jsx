import LK from "../../Icons/LK.svg";
import notification from "../../Icons/notification.svg";
export default function SideIcon() {
  return (
    <div className="flex justify-end top-0">
      <div className="flex justify-center items-center h-[51px] w-[51px] rounded-[50%] border-[1.3px] bg-[var(--color-darker)] text-[16px] font-medium">
        <img src={notification} alt="notification" className="w-6 h-6" />
      </div>
      <div className="ml-2 flex justify-center items-center h-[51px] w-[51px] rounded-[50%] border-[1.3px] bg-[var(--color-darker)] ">
      <img src={LK} alt="LK" className="w-6 h-6" />
      </div>
    </div>
  );
}

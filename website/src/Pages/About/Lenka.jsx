import AboutWrapper from "../../Components/AboutWrapper";
import Consultation from "../../Components/Consultation";

export default function Lenka() {
  return (
    <div className="w-11/12 m-auto">
      <AboutWrapper showArrow={true} />
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="m-20">
        <Consultation />
      </div>
    </div>
  );
}

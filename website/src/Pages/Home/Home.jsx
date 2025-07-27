import AboutWrapper from "../../Components/AboutWrapper";
import ArrowColumn from "../../Components/ArrowColumn";
import BodyGoal from "./BodyGoal";
import women from "../../../images/women.png";
import Services from "./Services";

export default function Home() {
  return (
    <div className="w-11/12 m-auto">
      <div className="grid grid-cols-3 mt-16 ">
        <div className="font-primary uppercase font-bold text-[89px] col-span-2">
          <h1 className="">
            <span className="block">UNLEASH</span>
            <span className="block">YOUR</span>
            <span className="block">INNER</span>
            <span className="block whitespace-nowrap">STRENGTH💪</span>
          </h1>
        </div>
        <div className="flex justify-center">
          <img src={women} alt="Women image" className="w-[399px] h-[543px]"/>
        </div>
      </div>
      <BodyGoal />
      <div className="bg-primary h-[571px] w-full">
      <AboutWrapper bgColor={true} showButton={true} />
      </div>
      <div>
        <Services />
      </div>
      {/* <Banner /> */}
    </div>
  );
}

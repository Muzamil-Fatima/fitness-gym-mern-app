import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../Utils/api";
import ArrowRow from "../../Components/ArrowRow";
import DropDown from "../../Components/DropDown";
import BookNow from "./BookNow";
import Consultation from "../../Components/Consultation";

export default function PageWrapper() {
  const { slug } = useParams();
  const [classData, setClassData] = useState(null);

  useEffect(() => {
    const fetchClassData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/classes/slug/${slug}`);
           console.log("Fetched classes:", res.data.data);
        setClassData(res.data.data);
      } catch (error) {
        alert("Error:" + (error.response?.data.message || error.message));
      }
    };
    fetchClassData();
  }, [slug]);
  if (!classData)
    return <div className="text-white text-2xl">Loading.......</div>;
  return (
    <div className="w-11/12 m-auto ">
      <div>
        <h3 className="font-primary font-bold text-[64px] mt-12 mb-0">
          <span className="block">{classData.classTitle.split(" ").slice(0, -1).join(" ")}</span>
          <span className="block mt-0 text-[var(--color-primary)]">
            {classData.classTitle.split(" ").slice(-1)}
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
            <p className="mt-4 mb-6">{classData.classDescription}</p>
          </div>
        </div>
        <div>
          <img
            src={`${BASE_URL}/${classData.classImage1}`}
            alt="classImage"
            className="w-[555px] h-[397px] m-4"
          />
          <img
            src={`${BASE_URL}/${classData.classImage2}`}
            alt="classImage"
            className="w-[576px] h-[304px] m-4"
          />
        </div>
        <BookNow />
      </div>
      <Consultation />
    </div>
  );
}

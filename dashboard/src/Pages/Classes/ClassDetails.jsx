import { useEffect, useState } from "react";
import deletes from "../../../Icons/delete.svg";
import group from "../../../Icons/group.svg";
export default function ClassDetails() {

  const [classes, setClasses] = useState([]);
  
  //  get data from api
  useEffect(() => {
    fetch("http://localhost:3000/classess")
      .then((response) => response.json())
      .then((data) => setClasses(data))
      .catch((error) => console.error("Error fetching clients: ", error));
  }, []);
  return (
    <>
      <div className="mt-2  border-[1px] border-[var(--color-white)]/15 rounded-[15px] ">
        <div className="flex py-2 px-2 items-center justify-between border-b-[1px] border-b-[var(--color-white)]/15">
          <div className="text-[16px]">List</div>
          <div className="flex gap-3 items-center justify-end">
            <img
              src={deletes}
              alt=""
              className="px-2.5 border-l-[1px] border-r-[1px]  border-l-[var(--color-white)]/15  border-r-[var(--color-white)]/15 m-1"
            />
            <p className="text-[14px]">
              1-4 <span className="opacity-20">of 4</span>
            </p>
          </div>
        </div>
        <div>
          <div className="text-[13px] font-medium">
            <table className="border-collapse border-spacing-y-3 w-full">
              <thead>
                <tr className="border-b-[1px] border-b-[var(--color-white)]/15">
                  <th className=" px-4 py-3">
                    <div className="flex items-center gap-1">
                      <input
                        type="checkbox"
                        className="w-4 h-4 accent-[var(--color-primary)] border-[1px] border-[var(--color-primary)] rounded focus:ring-[var(--color-primary)]/20"
                      />
                      ID
                      <img src={group} className="w-[8px] h-4" />
                    </div>
                  </th>
                  <th className=" px-4 py-3">
                    <div className="flex items-center gap-1">
                      Class Name
                      <img src={group} className="w-[8px] h-4" />
                    </div>
                  </th>
                  <th className=" px-4 py-3">
                    <div className="flex items-center gap-1">
                      Description
                      <img src={group} className="w-[8px] h-4" />
                    </div>
                  </th>
                  <th className=" px-4 py-3">
                    <div className="flex items-center gap-1">
                      Availability
                      <img src={group} className="w-[8px] h-4" />
                    </div>
                  </th>
                  <th className=" px-4 py-3">
                    <div className="flex items-center gap-1">
                      Status
                      <img src={group} className="w-[8px] h-4" />
                    </div>
                  </th>
                  <th className=" px-4 py-3">
                    <div className="flex items-center gap-1">
                      Action
                      <img src={group} className="w-[8px] h-4" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {classes.map((client, index) => (
                  <tr
                    key={client.id}
                    className={`border-b-[1px] border-b-[var(--color-white)]/15 text-[13px] font-medium
                    ${index % 2 !== 0 ? "bg-[var(--color-darker)]" : ""}
                     `}
                  >
                    <td className="px-4 py-3">
                      {" "}
                      <input
                        type="checkbox"
                        className="w-4 h-4 bg-transparent accent-[var(--color-primary)]/20 border-[1px] border-[var(--color-white)]/15 rounded focus:ring-[var(--color-primary)]/20"
                      />{" "}
                      {client.id}
                    </td>
                    <td className="px-4 py-3 flex items-center gap-2 ">
                      <img
                        src={client.profile}
                        alt={client.name}
                        className="w-6 h-6 rounded-full"
                      />
                      {client.name}
                    </td>

                    <td className="px-4 py-3">{client.email} </td>
                    <td className="px-4 py-3">{client.sessions}</td>
                    <td className="px-4 py-3">{client.classes} </td>
                    <td className="px-4 py-3">
                      {" "}
                      <button className="w-[68px] h-6 rounded-[27px] text-[#14CA74] bg-[#14CA74]/50 border-[0.6px] border-[#14CA74]">
                        {client.status}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

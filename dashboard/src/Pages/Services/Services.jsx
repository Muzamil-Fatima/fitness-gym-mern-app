// import { useEffect, useState } from "react";
import Search from "../../Component/Search";
// import arrow from "../../../Icons/arrow-up.svg";
// import group from "../../../Icons/group.svg";
import NewServices from "./NewServices";
// import { BASE_URL } from "../../../Utils/api";

export default function Services() {
  // const [services, setServices] = useState([]);
  // const [rowsPerPage, setRowsPerPage] = useState(10);
  // const [currentPage, setCurrentPage] = useState(1);

  // const totalPages = Math.ceil(services.length / rowsPerPage);

  // //   Data paginate
  // const paginatedClients = services.slice(
  //   (currentPage - 1) * rowsPerPage,
  //   currentPage * rowsPerPage
  // );
  //  get data from api
// useEffect(() => {
//   fetch(`${BASE_URL}/api/services`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log("Fetched services:", data); // ✅ helpful log
//       setServices(data);
//     })
//     .catch((error) => {
//       console.error("❌ Error fetching services:", error.message);
//     });
// }, []);


  return (
    <div className="font-secondary font-medium text-[13px] mr-4">
      <h2 className="font-bold text-[40px]  mt-2 ">Services</h2>
      <Search />
      {/* <div className="mt-2  border-[1px] border-[var(--color-white)]/15 rounded-[15px] ">
        <div className="flex py-2 px-2 items-center justify-between border-b-[1px] border-b-[var(--color-white)]/15">
          <div className="text-[16px]">List</div>
          <div className="flex gap-3 items-center justify-end">
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
                      Services Name
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
                {paginatedClients.map((service, index) => (
                  <tr
                    key={service.id}
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
                      {service.id}
                    </td>
                    <td className="px-4 py-3 flex items-center gap-2 ">
                      <img
                        src={service.icon}
                        alt={services.name}
                        className="w-6 h-6 rounded-full"
                      />
                      {services.name}
                    </td>
                    <td className="px-4 py-3">
                      <button className="w-[68px] h-6 rounded-[27px] text-[#14CA74] bg-[#14CA74]/50 border-[0.6px] border-[#14CA74]">
                        {services.status}
                      </button>
                    <td className="px-4 py-3"><button></button> </td>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div> */}
      {/* <div className="mt-6 mb-6 flex justify-between">
        <p>
          {(currentPage - 1) * rowsPerPage + 1}-
          {Math.min(currentPage * rowsPerPage, services.length)} of{" "}
          {services.length}
        </p>
        <div className="flex">
          <p>
            Row per Page:
            <select
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              name=""
              id=""
              className="ml-1.5 bg-[var(--color-darker)] h-[26px] w-[42px] border-[1px] border-[var(--color-white)]/15 mr-6"
            >
              <option value={5}>5</option>
            </select>
          </p>
          <div className="flex gap-1.5">
            <img
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              src={arrow}
              alt="previous"
              className={`bg-[var(--color-darker)] h-[26] w-[26px] border-[1px] border-[var(--color-white)]/15 rotate-180
                ${currentPage === 1 ? "opacity-30 cursor-not-allowed" : ""}
                `}
            />
            <img
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              src={arrow}
              alt="next"
              className={`bg-[var(--color-darker)] h-[26] w-[26px] border-[1px] border-[var(--color-white)]/15 
                ${
                  currentPage === totalPages
                    ? "opacity-30 cursor-not-allowed"
                    : ""
                }
                `}
            />
          </div>
        </div>
      </div> */}
      <NewServices />
    </div>
  );
}

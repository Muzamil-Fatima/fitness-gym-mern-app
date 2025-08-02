import { useEffect, useState } from "react";
import Search from "../../Component/Search";
import arrow from "../../../Icons/arrow-up.svg";
import group from "../../../Icons/group.svg";
import NewServices from "./NewServices";
import { BASE_URL } from "../../../Utils/api";
import axios from "axios";

export default function Services() {
  const [services, setServices] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(services.length / rowsPerPage);

  //   Data paginate
  const paginatedServices = services.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  //  get data from api
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/services`);
        setServices(res.data.data);
      } catch (error) {
        alert("Error: " + (error.response?.data?.message || error.message));
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="font-secondary font-medium text-[15px] mr-8">
      <h2 className="font-bold text-[40px]  mt-2 ">Services</h2>
      <Search />
      <div className="mt-3 mr-12 ml-2 border-[1px] border-[var(--color-white)]/15 rounded-[15px] ">
        <div className="flex py-4 px-2 items-center justify-between border-b-[1px] border-b-[var(--color-white)]/15">
          <div className="text-[16px]">List</div>
          <div className="flex gap-3 items-center justify-end">
            <p>
              {(currentPage - 1) * rowsPerPage + 1}-
              {Math.min(currentPage * rowsPerPage, services.length)}{" "}
              <span className="opacity-20">
                of
                {services.length}
              </span>
            </p>
          </div>
        </div>
        <div>
          <div className="text-[13px] font-medium">
            <table className="border-collapse border-spacing-y-3 w-full">
              <thead>
                <tr className="border-b-[1px] border-b-[var(--color-white)]/15">
                  <th className=" px-4 py-4">
                    <div className="flex items-center gap-1">
                      <input
                        type="checkbox"
                        className="w-4 h-4 accent-[var(--color-primary)] border-[1px] border-[var(--color-primary)] rounded focus:ring-[var(--color-primary)]/20"
                      />
                      ID
                      <img src={group} className="w-[8px] h-4" />
                    </div>
                  </th>
                  <th className="px-4 py-3">
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
                {paginatedServices.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center py-6 text-red-500">
                      No services found.
                    </td>
                  </tr>
                ) : (
                  paginatedServices.map((service, index) => (
                    <tr
                      key={service.id}
                      className={`border-b-[1px] border-b-[var(--color-white)]/15 text-[13px] font-medium
                    ${index % 2 !== 0 ? "bg-[var(--color-darker)]" : ""}
                     `}
                    >
                      <td className="pl-4 py-3">
                        {" "}
                        <input
                          type="checkbox"
                          className="w-4 h-4 bg-transparent accent-[var(--color-primary)]/20 border-[1px] border-[var(--color-white)]/15 rounded focus:ring-[var(--color-primary)]/20"
                        />{" "}
                        {service.servicesId}
                      </td>
                      <td className="py-3 flex items-center gap-2 text-[13px]">
                        <img
                          src={`${BASE_URL}/${service.servicesIcon}`}
                          alt={service.name}
                          className="w-8 h-8"
                        />
                        {service.servicesName}
                      </td>
                      <td className="px-4 py-3">
                        <button className="py-3 flex justify-center items-center w-[68px] h-6 rounded-[27px] text-[#14CA74] bg-[#14CA74]/50 border-[0.6px] border-[#14CA74]">
                          {service.status}
                        </button>
                      </td>
                      <td className="pl-6 py-3">
                        <button>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.5">
                              <path
                                d="M5.54102 16.625C5.1056 16.625 4.73299 16.4701 4.42318 16.1603C4.11338 15.8505 3.95821 15.4776 3.95768 15.0417V4.75H3.16602V3.16667H7.12435V2.375H11.8743V3.16667H15.8327V4.75H15.041V15.0417C15.041 15.4771 14.8861 15.85 14.5763 16.1603C14.2665 16.4706 13.8936 16.6255 13.4577 16.625H5.54102ZM13.4577 4.75H5.54102V15.0417H13.4577V4.75ZM7.12435 13.4583H8.70768V6.33333H7.12435V13.4583ZM10.291 13.4583H11.8743V6.33333H10.291V13.4583Z"
                                fill="white"
                              />
                            </g>
                          </svg>
                        </button>{" "}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-6 mb-6 mr-12 ml-2 flex justify-between">
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
              <option value={4}>4</option>
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
      </div>
      <NewServices />
    </div>
  );
}

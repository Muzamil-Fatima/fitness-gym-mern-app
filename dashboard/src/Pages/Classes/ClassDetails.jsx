import { useEffect, useState } from "react";
import deletes from "../../../Icons/delete.svg";
import group from "../../../Icons/group.svg";
import arrow from "../../../Icons/arrow-up.svg";
import { BASE_URL } from "../../../Utils/api";
import axios from "axios";
export default function ClassDetails() {
  const [classes, setClasses] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(classes.length / rowsPerPage);

  //   Data paginate
  const paginatedClasses = classes.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  //  get data from api
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/classes`);
        setClasses(res.data.data);
      } catch (error) {
        alert("Error: " + (error.response?.data?.message || error.message));
      }
    };
    fetchClasses();
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
            <p>
              {(currentPage - 1) * rowsPerPage + 1}-
              {Math.min(currentPage * rowsPerPage, classes.length)}{" "}
              <span className="opacity-20">
                of
                {classes.length}
              </span>
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
                {paginatedClasses.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center py-6 text-red-500">
                      No Classes found.
                    </td>
                  </tr>
                ) : (
                  paginatedClasses.map((classItems, index) => (
                    <tr
                      key={classItems.classId}
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
                        {classItems.id}
                      </td>
                      <td className="px-4 py-3 flex items-center gap-2 ">
                        <img
                          src={`${BASE_URL}/${classItems.classBanner}`}
                          alt={classItems.classTitle}
                          className="w-7 h-7 rounded-[4px]"
                        />
                        {classItems.classTitle}
                      </td>
                      <td className="px-4 py-3 max-w-[200px] truncate">
                        {classItems.classDescription}{" "}
                      </td>
                      <td className="px-4 py-3">
                        {classItems.classAvailability}
                      </td>

                      <td className="px-4 py-3">
                        {" "}
                        <button className="w-[68px] h-6 rounded-[27px] text-[#14CA74] bg-[#14CA74]/50 border-[0.6px] border-[#14CA74]">
                          {classItems.status}
                        </button>
                      </td>
                      <td className="px-4 py-3">
                        {" "}
                        <button>
                          <svg
                            width="17"
                            height="18"
                            viewBox="0 0 17 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.8743 8.99995C14.6865 8.99995 14.5063 9.07457 14.3735 9.20741C14.2406 9.34025 14.166 9.52042 14.166 9.70828V13.9583C14.166 14.1461 14.0914 14.3263 13.9585 14.4591C13.8257 14.592 13.6455 14.6666 13.4577 14.6666H3.54102C3.35315 14.6666 3.17299 14.592 3.04015 14.4591C2.90731 14.3263 2.83268 14.1461 2.83268 13.9583V4.04161C2.83268 3.85375 2.90731 3.67358 3.04015 3.54075C3.17299 3.40791 3.35315 3.33328 3.54102 3.33328H7.79102C7.97888 3.33328 8.15904 3.25865 8.29188 3.12581C8.42472 2.99298 8.49935 2.81281 8.49935 2.62495C8.49935 2.43708 8.42472 2.25692 8.29188 2.12408C8.15904 1.99124 7.97888 1.91661 7.79102 1.91661H3.54102C2.97743 1.91661 2.43693 2.1405 2.03841 2.53901C1.6399 2.93753 1.41602 3.47803 1.41602 4.04161V13.9583C1.41602 14.5219 1.6399 15.0624 2.03841 15.4609C2.43693 15.8594 2.97743 16.0833 3.54102 16.0833H13.4577C14.0213 16.0833 14.5618 15.8594 14.9603 15.4609C15.3588 15.0624 15.5827 14.5219 15.5827 13.9583V9.70828C15.5827 9.52042 15.5081 9.34025 15.3752 9.20741C15.2424 9.07457 15.0622 8.99995 14.8743 8.99995ZM4.24935 9.53828V12.5416C4.24935 12.7295 4.32398 12.9096 4.45682 13.0425C4.58965 13.1753 4.76982 13.2499 4.95768 13.2499H7.96102C8.05424 13.2505 8.14665 13.2326 8.23295 13.1974C8.31925 13.1621 8.39775 13.1102 8.46393 13.0445L13.3656 8.13578L15.3773 6.16661C15.4437 6.10076 15.4964 6.02242 15.5323 5.93611C15.5683 5.84979 15.5868 5.7572 15.5868 5.6637C15.5868 5.57019 15.5683 5.4776 15.5323 5.39129C15.4964 5.30497 15.4437 5.22663 15.3773 5.16078L12.3739 2.12203C12.3081 2.05564 12.2297 2.00294 12.1434 1.96698C12.0571 1.93102 11.9645 1.91251 11.871 1.91251C11.7775 1.91251 11.6849 1.93102 11.5986 1.96698C11.5123 2.00294 11.4339 2.05564 11.3681 2.12203L9.3706 4.12661L4.45477 9.03536C4.38912 9.10155 4.33718 9.18004 4.30193 9.26635C4.26668 9.35265 4.24881 9.44506 4.24935 9.53828ZM11.871 3.6237L13.8756 5.62828L12.8698 6.63411L10.8652 4.62953L11.871 3.6237ZM5.66602 9.8287L9.86643 5.62828L11.871 7.63286L7.6706 11.8333H5.66602V9.8287Z"
                              fill="#F24822"
                            />
                          </svg>
                        </button>
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
          {Math.min(currentPage * rowsPerPage, classes.length)} of{" "}
          {classes.length}
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
                           ${
                             currentPage === 1
                               ? "opacity-30 cursor-not-allowed"
                               : ""
                           }
                           `}
            />
            <img
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              src={arrow}
              alt="next"
              className={`bg-[var(--color-darker)] h-[26] w-[26px] border-[1px] border-[var(--color-white)]/15  ${
                currentPage === totalPages
                  ? "opacity-30 cursor-not-allowed"
                  : ""
              }
                           `}
            />
          </div>
        </div>
      </div>
    </>
  );
}

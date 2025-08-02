import { useEffect, useRef, useState } from "react";
import axios from "axios";
import add from "../../../Icons/add.svg";
import Times from "./Times";
import { BASE_URL } from "../../../Utils/api.js";

export default function ClassModel({ isOpen, onClose }) {
  const [fileData, setFileData] = useState([
    { file: null, preview: null },
    { file: null, preview: null },
    { file: null, preview: null },
  ]);
  const classRef = useRef(null);

  // handel data states
  const [className, setClassName] = useState("");
  const [classDes, setClassDes] = useState("");
  const [classAvailability, setClassAvailability] = useState("");
  // define input data
  const inputFields = [
    { placeholder: "Banner" },
    { placeholder: "Image 1" },
    { placeholder: "Image 2" },
  ];
  const handleFileChange = async (e, index) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const updateFiles = [...fileData];
    updateFiles[index] = {
      file: selectedFile,
      preview: URL.createObjectURL(selectedFile),
    };
    setFileData(updateFiles);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (classRef.current && !classRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const details = new FormData();
    details.append("classTitle", className);
    details.append("classDescription", classDes);
    details.append("classAvailability", classAvailability);
    details.append("classBanner", fileData[0].file);
    details.append("classImage1", fileData[1].file);
    details.append("classImage2", fileData[2].file);

    try {
      const res = await axios.post(`${BASE_URL}/api/classes`, details, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Class created: " + res.data?.message || "Success");
    } catch (error) {
      alert("Error: ", error.response?.data || error.message);
    }
  };
  return (
    <div
      ref={classRef}
      className="absolute right-0 mt-3 mr-8 bg-[#1E1E1E] text-white rounded-[15px] shadow-lg pl-8 pr-8 p-4 h-auto z-50"
    >
      <div className="flex gap-20">
        <input
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          className="border border-[var(--color-white)]/15 rounded-[15px] pl-4 pr-32"
          placeholder="Enter New Class Title"
          type="text"
          name=""
          id=""
        />
        <div className="flex justify-center items-center gap-1.5">
          <span className="text-2xl font-semibold ">Availability:</span>
          <Times
            value={classAvailability}
            onChange={(value) => setClassAvailability(value)}
          />
        </div>
      </div>
      <textarea
        value={classDes}
        onChange={(e) => setClassDes(e.target.value)}
        className="border border-[var(--color-white)]/15 rounded-[15px] pl-4 pt-4 w-full h-[220px] mt-3 mb-3"
        placeholder="Description..."
        name=""
        id=""
      ></textarea>
      <div className="flex gap-4">
        {inputFields.map((field, index) => (
          <div
            key={index}
            className="relative mb-3 h-[55px] p-3 border-[1px] border-[var(--color-white)]/15 rounded-[15px]"
          >
            <label htmlFor={`file-${index}`} className="flex justify-center">
              {fileData[index].preview ? (
                <img
                  src={fileData[index].preview}
                  alt="preview"
                  className="absolute inset-0 w-full h-full object-cover rounded-[15px] z-0"
                />
              ) : (
                <>
                  <span className="flex items-center">Icon</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 21C4.45 21 3.97933 20.8043 3.588 20.413C3.19667 20.0217 3.00067 19.5507 3 19V5C3 4.45 3.196 3.97933 3.588 3.588C3.98 3.19667 4.45067 3.00067 5 3H19C19.55 3 20.021 3.196 20.413 3.588C20.805 3.98 21.0007 4.45067 21 5V19C21 19.55 20.8043 20.021 20.413 20.413C20.0217 20.805 19.5507 21.0007 19 21H5ZM6 17H18L14.25 12L11.25 16L9 13L6 17Z"
                      fill="#F24822"
                    />
                  </svg>
                </>
              )}

              <input
                id={`file-${index}`}
                onChange={(e) => handleFileChange(e, index)}
                // onChange={handleFileChange}
                type="file"
                accept="image/*"
                placeholder={field.placeholder}
                className="opacity-0 cursor-pointer absolute inset-0 "
              />
            </label>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          className="w-[212px] h-[55px] m-4 rounded-[15px] bg-[var(--color-primary)] flex justify-center items-center"
        >
          <img src={add} className="h-6 w-6" />{" "}
          <span className="text-[16px] ml-1.5">Add New Class</span>
        </button>
      </div>
    </div>
  );
}
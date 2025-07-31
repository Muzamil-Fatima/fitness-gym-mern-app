import { useEffect, useRef, useState } from "react";
import axios from "axios";
import add from "../../../Icons/add.svg";
import Times from "./Times";
import picture from "../../../Icons/picture.svg";

export default function ClassModel({ isOpen, onClose }) {
  const [fileData, setFileData] = useState([
    { file: null, preview: null },
    { file: null, preview: null },
    { file: null, preview: null },
  ]);
  const classRef = useRef(null);
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

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const res = await axios.post("http://localhost:5000/upload", formData);
      alert("Uploaded successfully");
      console.log(res.data);
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    }
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

  if (!isOpen) return null;
  return (
    <div
      ref={classRef}
      className="absolute right-0 mt-3 mr-8 bg-[#1E1E1E] text-white rounded-[15px] shadow-lg pl-8 pr-8 p-4 h-auto z-50"
    >
      <div className="flex gap-20">
        <input
          className="border border-[var(--color-white)]/15 rounded-[15px] pl-4 pr-32"
          placeholder="Enter New Class Title"
          type="text"
          name=""
          id=""
        />
        <div className="flex justify-center items-center gap-1.5">
          <span className="text-2xl font-semibold ">Availability:</span>
          <Times />
        </div>
      </div>
      <textarea
        className="border border-[var(--color-white)]/15 rounded-[15px] pl-4 pt-4 w-full h-[220px] mt-3 mb-3"
        placeholder="Description..."
        name=""
        id=""
      ></textarea>
      <div className="flex gap-4">
        {inputFields.map((field, index) => (
          <div key={index}>
            <input
              onChange={(e) => handleFileChange(e, index)}
              type="file"
              accept="image/*"
              placeholder={field.placeholder}
              className="border border-[var(--color-white)]/15 rounded-[15px] w-1/3 h-[77px] text-center"
            />
            {fileData[index].preview && (
              <img
                src={fileData[index].preview}
                alt={picture}
                className="w-40 h-40 object-cover rounded"
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <button className="w-[212px] h-[55px] m-4 rounded-[15px] bg-[var(--color-primary)] flex justify-center items-center">
          <img src={add} className="h-6 w-6" />{" "}
          <span className="text-[16px] ml-1.5">Add New Class</span>
        </button>
      </div>
    </div>
  );
}

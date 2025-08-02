import add from "../../../Icons/add.svg";
import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../../../Utils/api.js";
export default function NewServices() {
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  // handel data states
  const [serviceName, setServiceName] = useState("");
  const [serviceDes, setServiceDes] = useState("");
  const [serviceIcon, setServiceIcon] = useState(null);
  const [serviceImage, setServiceImage] = useState(null);
  const serviceStatus = "Active";

  // call api

  const handleSubmit = async (e) => {
    e.preventDefault();

    const details = new FormData();
    details.append("servicesName", serviceName);
    details.append("servicesDescription", serviceDes);
    details.append("servicesIcon", serviceIcon);
    details.append("servicesImage", serviceImage);
    details.append("status", serviceStatus);

    try {
      const res = await axios.post(`${BASE_URL}/api/services`, details, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Service created: ", res.data);
    } catch (error) {
      alert("Error: ", error.response?.data || error.message);
    }
  };

  const handleIconChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setServiceIcon(file);
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setServiceImage(file);
      setSelectedFile(URL.createObjectURL(file));
    } else {
      setSelectedFile(null);
    }
  };
  return (
    <>
      <div className="border-[1px] border-[var(--color-white)]/15 w-full mt-10 rotate-180 text-[16px]"></div>
      <div className="mt-16 flex justify-between ml-8">
        <div className="w-[418px] flex flex-col">
          <div className="relative mb-3 h-[55px] p-3 border-[1px] border-[var(--color-white)]/15 rounded-[15px]">
            <label htmlFor="" className="flex justify-center">
              {preview ? (
                <img
                  src={preview}
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
                onChange={handleIconChange}
                type="file"
                accept="image/*"
                placeholder="Icon"
                className="opacity-0 cursor-pointer absolute inset-0 "
              />
            </label>
          </div>
          <input
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            type="text"
            placeholder="Enter New Service Name"
            className="h-[55px] p-3  border-[1px] border-[var(--color-white)]/15 rounded-[15px] mb-3"
          />
          <div className="relative mb-3 h-[55px] p-3 border-[1px] border-[var(--color-white)]/15 rounded-[15px]">
            <label htmlFor="" className="flex justify-center">
              {selectedFile ? (
                <img
                  src={selectedFile}
                  alt="preview"
                  className="absolute inset-0 w-full h-full object-cover rounded-[15px] z-0"
                />
              ) : (
                <>
                  <span className="flex items-center">Image</span>
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
                onChange={handleImageChange}
                type="file"
                accept="image/*"
                placeholder="Icon"
                className="opacity-0 cursor-pointer absolute inset-0 "
              />
            </label>
          </div>
          <textarea
            value={serviceDes}
            onChange={(e) => setServiceDes(e.target.value)}
            placeholder="Description"
            name=""
            id=""
            className="h-[200px] border-[1px] p-3 border-[var(--color-white)]/15 rounded-[15px] mb-16"
          ></textarea>
        </div>
        <div>
          <button
            onClick={handleSubmit}
            className="w-[224px] h-[55px] rounded-[15px] bg-[var(--color-primary)] flex justify-center items-center"
          >
            <img src={add} className="h-6 w-6" />{" "}
            <span className="text-[16px] ml-1.5">Add</span>
          </button>
        </div>
      </div>
    </>
  );
}

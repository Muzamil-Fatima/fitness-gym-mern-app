import { useState, useRef } from "react";
export default function UserProfile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState();


  const handleSubmit = async (e)=>{
    e.PreventDefault();
  }


  // handle image
  const handleClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setPreview(preview);
    }
  };
  return (
    <div className="grid-cols-3 grid font-secondary">
      <div className="p-10 border-2 border-dashed border-[var(--color-primary)] ">
        <h1 className="text-2xl font-bold mb-6">User Profile</h1>

        {user ? (
          <div className="space-y-4 max-w-md">
            {/* Profile Icon (same as navbar) */}
            <div
              onClick={handleClick}
              className="relative group w-36 h-36 cursor-pointer rounded-full overflow-hidden"
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Selected Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[var(--color-primary)] text-white text-4xl font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              )}
              <div className="text-[var(--color-primary)] absolute inset-0 bg-black/50 bg-opacity-40 hidden group-hover:flex items-center justify-center transition-all duration-300">
                <svg
                  fill="currentColor"
                  width="36px"
                  height="36px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19,6.5H17.72l-.32-1a3,3,0,0,0-2.84-2H9.44A3,3,0,0,0,6.6,5.55l-.32,1H5a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-8A3,3,0,0,0,19,6.5Zm1,11a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1v-8a1,1,0,0,1,1-1H7a1,1,0,0,0,1-.68l.54-1.64a1,1,0,0,1,.95-.68h5.12a1,1,0,0,1,.95.68l.54,1.64A1,1,0,0,0,17,8.5h2a1,1,0,0,1,1,1Zm-8-9a4,4,0,1,0,4,4A4,4,0,0,0,12,8.5Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14.5Z" />
                </svg>
              </div>
            </div>

            {/* User Info */}
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
                
            </p>
            <button
            onClick={handleSubmit}
            className="h-[55px] w-2xs bg-[var(--color-primary)] rounded-2xl">
              Save Change
            </button>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        ) : (
          <p>User not logged in.</p>
        )}
      </div>
      <div className="col-span-2">hy</div>
    </div>
  );
}

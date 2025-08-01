import axios from "axios";
import { useState } from "react";
import logo from "../../../images/Logo.svg";
export default function SignUp({ switchForm }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword)
      return alert("All field required");
    if (password.length < 6)
      return alert("Password must beat least 6 character");
    if (password !== confirmPassword) return alert("Passwords do not match");

    try {
      const res = await axios.post("http://localhost:8000/api/users/register", {
        name,
        password,
        email,
      });
      alert(`${name} registered successfully!`);
      console.log(res.data);
      // reset field
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      const backendMessage = error.response?.data?.message;

      if (backendMessage === "User already exists") {
        alert("This email is already registered. Please try another.");
      } else if (backendMessage === "Server Error") {
        alert("Something went wrong on the server.");
      } else {
        alert("Unknown error occurred.");
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} action="post">
      <div className="font-secondary pr-10 pl-10">
        <img src={logo} alt="" className="m-8" />
        <div>
          <label htmlFor="">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Enter Name"
            type="text"
            className="bg-[var(--color-white)] py-3 px-2 flex justify-center rounded-[6px] w-full mt-1 mb-2 placeholder-[#BCBEC0] text-[var(--color-darker)]"
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="username@gmail.com"
            type="email"
            className="bg-[var(--color-white)] py-3 px-2 flex justify-center rounded-[6px] w-full mt-1 mb-2 placeholder-[#BCBEC0] text-[var(--color-darker)]"
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="bg-[var(--color-white)] py-3 px-2 flex justify-center rounded-[6px] w-full mt-1 mb-2 text-[var(--color-darker)] placeholder-[#BCBEC0] "
            placeholder="Password"
            type="password"
          />
          <label htmlFor="">Confirm Password</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-[var(--color-white)] py-3 px-2 flex justify-center rounded-[6px] w-full mt-1 mb-2 text-[var(--color-darker)] placeholder-[#BCBEC0] "
            placeholder="Confirm Password"
            type="password"
          />
        </div>
        <button
          type="submit"
          className="mb-3 bg-[var(--color-primary)] flex justify-center items-center text-[20px] py-2 w-full rounded-[10px] mt-4 cursor-pointer"
        >
          Sign Up
        </button>
        <p className="mt-2 pb-4 text-[14px]">
          have an account{" "}
          <span
            onClick={() => switchForm("login")}
            className="text-blue-500 hover:underline cursor-pointer "
          >
            Sign In!
          </span>
        </p>
      </div>
    </form>
  );
}

import { useState } from "react";
import logo from "../../../images/Logo.svg";
import { BASE_URL } from "../../../Utils/api";
import axios from "axios";
export default function LoginForm({ switchForm }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${BASE_URL}`);
      if(res === "email" && res === "password"){
        alert("Login Successfully")
      }
    } catch (error) {
      alert(error.message?.data.message || "Login failed");
    }
  };
  return (
    <div className="font-secondary pr-10 pl-10">
      <img src={logo} alt="" className="m-8" />
      <h2 className="text-3xl font-semibold mb-4">Login</h2>
      <div>
        <label htmlFor="">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="username@gmail.com"
          type="email"
          className="bg-[var(--color-white)] py-3 px-2 flex justify-center rounded-[6px] w-full mt-1 mb-2 placeholder-[#BCBEC0] text-[var(--color-darker)]"
        />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-[var(--color-white)] py-3 px-2 flex justify-center rounded-[6px] w-full mt-1 mb-2 text-[var(--color-darker)] placeholder-[#BCBEC0] "
          placeholder="Password"
          type="password"
        />
      </div>
      <p onClick={() => switchForm("forgot")} className="opacity-50">
        Forgot Password?
      </p>
      <button
        onClick={handleLogin}
        className="bg-[var(--color-primary)] flex justify-center items-center text-[20px] py-2 w-full rounded-[10px] mt-3 cursor-pointer"
      >
        Sign in
      </button>
      <p className="mt-2 pb-6 text-[14px]">
        Don't have account{" "}
        <span
          onClick={() => switchForm("signUp")}
          className="text-blue-500 hover:underline cursor-pointer"
        >
          Sign up!
        </span>
      </p>
    </div>
  );
}

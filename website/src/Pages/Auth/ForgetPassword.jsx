import logo from "../../../images/Logo.svg";
export default function ForgetPassword({ switchForm }) {
  return (
    <div className="font-secondary pr-10 pl-10">
      <img src={logo} alt="" className="m-4" />
      <div>
        <label htmlFor="">Email</label>
        <input
          placeholder="username@gmail.com"
          type="email"
          className="bg-[var(--color-white)] py-3 px-2 flex justify-center rounded-[6px] w-full mt-1 mb-2 placeholder-[#BCBEC0] text-[var(--color-darker)]"
        />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input
          className="bg-[var(--color-white)] py-3 px-2 flex justify-center rounded-[6px] w-full mt-1 mb-2 text-[var(--color-darker)] placeholder-[#BCBEC0] "
          placeholder="Password"
          type="password"
        />
      </div>
      <div>
        <label htmlFor="">Confirm Password</label>
        <input
          className="bg-[var(--color-white)] py-3 px-2 flex justify-center rounded-[6px] w-full mt-1 mb-2 text-[var(--color-darker)] placeholder-[#BCBEC0] "
          placeholder="Confirm Password"
          type="password"
        />
      </div>
      <button className="mt-5 bg-[var(--color-primary)] flex justify-center items-center text-[20px] py-2 w-full rounded-[10px] cursor-pointer">
        Update
      </button>
      <p className="mt-3 pb-6 text-[14px]">
        Login with Password{" "}
        <span
          onClick={() => switchForm("login")}
          className="text-blue-500 hover:underline cursor-pointer"
        >
          Sign In!
        </span>
      </p>
    </div>
  );
}

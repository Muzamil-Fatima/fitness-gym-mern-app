// username
// password
// confirm password
// email
// profile picture
// have an account Sign In
// profile edit bd may add krni hai

import logo from "../../../images/Logo.svg";
export default function SignUp() {
  return (
    <div className="w-full h-screen bg-[var(--color-dark)] text-[var(--color-white)] flex justify-center items-center">
      <div className="w-[450px] h-[500px] bg-[var(--color-darker)] font-secondary font-normal text-[16px] flex justify-center rounded-[16px]">
        <div className="">
          <img src={logo} alt="" className="m-12" />
          <div>
            <label htmlFor="">userName</label>
            <input
              placeholder="Enter Name"
              type="text"
              className="bg-[var(--color-white)] py-3 px-2 flex justify-center rounded-[6px] w-full mt-1 mb-2 text-[#BCBEC0]"
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
              placeholder=" Confirm Password"
              type="password"
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              className="bg-[var(--color-white)] py-3 px-2 flex justify-center rounded-[6px] w-full mt-1 mb-2 text-[var(--color-darker)] placeholder-[#BCBEC0] "
              placeholder="Enter Email"
              type="email"
            />
          </div>
          <button className="bg-[var(--color-primary)] flex justify-center items-center text-[20px] py-2 w-full rounded-[10px] mt-3">
            Sign in
          </button>
          <p><span>have an account</span> <NavLink>SignIn</NavLink></p>
        </div>
      </div>
    </div>
  );
}

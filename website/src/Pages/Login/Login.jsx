import logo from "../../../images/Logo.svg";
export default function LoginForm() {
  return (
    <div className="w-full h-screen bg-[var(--color-dark)] text-[var(--color-white)] flex justify-center items-center">
      <div className="w-[450px] h-[500px] bg-[var(--color-darker)] font-secondary font-normal text-[16px] flex justify-center rounded-[16px]">
        <div className="">
          <img src={logo} alt="" className="m-12" />
          <h6 className="text-3xl font-semibold mb-4">Login</h6>
          <div>
            <label htmlFor="">Email</label>
            <input
              placeholder="username@gmail.com"
              type="email"
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
          <p className="opacity-50">Forgot Password?</p>
          <button className="bg-[var(--color-primary)] flex justify-center items-center text-[20px] py-2 w-full rounded-[10px] mt-3">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

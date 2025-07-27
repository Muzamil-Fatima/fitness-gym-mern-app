import women5 from "../../images/women5.png";
export default function Consultation() {
  return (
    <div className="h-[380px] w-[82vw] mx-auto bg-[var(--color-primary)] flex items-center justify-center p-10 rounded-2xl  overflow-hidden font-secondary">
      <div className="w-full h-full border-2 border-black border-dashed rounded-2xl grid grid-cols-3">
        <div className="p-6 col-span-2">
          <p className=" text-[52px] space-[-2] font-semibold block whitespace-nowrap ">Get a free Consultation</p>
          <p className=" text-base mb-6 ">
            Lorem Ipsum'is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer.
          </p>
          <div className="flex">
            <button className="w-[232px] h-14 text-[var(--color-white)] p-2.5 rounded-[10px] bg-[var(--color-darker)] m-2 hover:bg-transparent hover:text-[var(--color-darker)] hover:border-dashed hover:border-[var(--color-white)] hover:border-2 ">Email Us</button>
            <button className="h-14 w-[195px] text-[var(--color-darker)] border-2 border-dashed border-[var(--color-white)] rounded-[10px] m-2 hover:bg-[var(--color-darker)] hover:border-none hover:text-[var(--color-white)]">Call Us</button>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <p className="text-[var(--color-dark)] bg-[var(--color-white)] py-1 px-2 rounded-xl  transform -translate-x-16 ">Hey, it's free for you!</p>
          <img src={women5} alt="women img" className="max-h-full object-cover " />
        </div>
      </div>
    </div>
  );
}

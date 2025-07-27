import add from "../../../Icons/add.svg";
export default function NewServices() {
  return (
    <div className="mt-16 flex justify-between">
      <div className="w-[418px] ">
        <input
          type="text"
          placeholder="Icon"
          className="h-[55px] border-[1px] border-[var(--color-white)]/15 rounded-[15px] mb-3 "
        />
        <input
          type="text"
          placeholder="Enter New Service Name"
          className="h-[55px]  border-[1px] border-[var(--color-white)]/15 rounded-[15px] mb-3"
        />
        <input
          placeholder="Image"
          type="text"
          className="h-[55px]  border-[1px] border-[var(--color-white)]/15 rounded-[15px] mb-3"
        />
        <textarea
          placeholder="Description"
          name=""
          id=""
          className=" border-[1px] border-[var(--color-white)]/15 rounded-[15px] h-[92px] mb-16"
        ></textarea>
      </div>
      <div>
        <button className="w-[224px] h-[55px] rounded-[15px] bg-[var(--color-primary)] flex justify-center items-center">
          <img src={add} className="h-6 w-6" />{" "}
          <span className="text-[16px] ml-1.5">Add</span>
        </button>
      </div>
    </div>
  );
}

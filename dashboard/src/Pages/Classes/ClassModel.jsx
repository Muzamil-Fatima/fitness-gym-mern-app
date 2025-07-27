import add from "../../../Icons/add.svg";
export default function ClassModel() {
  return (
    <div className="w-4/5">
      <div>
        <input placeholder="Enter New Class Title" type="text" name="" id="" />
        <div>
          <span>Availability:</span>
        </div>
      </div>
      <textarea placeholder="Description..." name="" id=""></textarea>
      <div>
        <input
          placeholder="Banner"
          type="text"
          className="border border-[var(--color-white)]/15 rounded-[15px] w-1/3"
        />
      </div>
      <button className="w-[124px] h-[55px] rounded-[15px] bg-[var(--color-primary)] flex justify-center items-center">
        <img src={add} className="h-6 w-6" />{" "}
        <span className="text-[16px] ml-1.5">Add New Class</span>
      </button>
    </div>
  );
}

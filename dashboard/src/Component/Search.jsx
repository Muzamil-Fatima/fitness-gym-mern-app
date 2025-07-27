import search from "../../Icons/search.svg";

export default function Search({ searchPlace = "Search" }) {
  return (
    <div className="relative mt-2 mb-4 w-[300px]">
      <input
        type="text"
        className="pr-10 pl-3 w-full h-[45px] border rounded-[15px] font-secondary font-medium text-[16px] opacity-50"
        placeholder={searchPlace}
      />
      <img
        src={search}
        alt="search icon"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none"
      />
    </div>
  );
}

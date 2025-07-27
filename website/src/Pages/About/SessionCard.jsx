import ArrowRow from "../../Components/ArrowRow";
import BookNow from "./BookNow";
export default function SessionCard() {
  const sessions = [
    {
      id: 1,
      sessionCount: 1,
      title: "Session",
      duration: "1 HOUR",
      location: "LOCATION: In person (dubai) / Online",
      price: "AED 250",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    },
    {
      id: 2,
      sessionCount: 8,
      title: "Sessions",
      duration: "1 HOUR",
      location: "LOCATION: In person (dubai) / Online",
      price: "AED 1520",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    },
    {
      id: 3,
      sessionCount: 12,
      title: "Sessions",
      duration: "1 HOUR",
      location: "LOCATION: In person (dubai) / Online",
      price: "AED 2210",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    },
    {
      id: 4,
      sessionCount: 16,
      title: "Sessions",
      duration: "1 HOUR",
      location: "LOCATION: In person (dubai) / Online",
      price: "AED 2580",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    },
  ];
  return (
    <div className="w-full m-auto font-secondary">
      {sessions.map((session) => (
        <div
          key={session.id}
          className="gap-20 p-20 flex border-b-2 border-dashed border-[var(--color-primary)] hover:bg-[var(--color-darker)]"
        >
          <div className="flex ">
            {/* Left Section */}
            <div className="w-1/2 flex flex-col justify-center">
              <div>
                <p className="text-[64px] font-extrabold font-primary">
                  <span className="text-[var(--color-primary)]">
                    {session.sessionCount}
                  </span>{" "}
                  Session
                </p>
              </div>
              <div>
                <ArrowRow />
              </div>
              <div className="flex justify-center items-center">
                <p className="text-xl opacity-50">{session.description}</p>
              </div>
            </div>
            {/* Right Section */}
            <div className="w-1/2 ml-10">
              <div className="text-[32px] sm:text-[48px] md:text-[64px] font-semibold">
                {session.duration}
              </div>
              <div className="text-2xl uppercase mt-4 mb-4">{session.location}</div>
              <div className="text-[32px] sm:text-[48px] md:text-[64px] font-black">
                {session.price}
              </div>
              {/* Book Now button component */}
              <BookNow session={session} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function BookNow({ session }) {
  const handleBook = () => {
    console.log("Booking this session:", session.id);
  };
  return (
    <>
      <button
      className="mt-6 font-secondary bg-[var(--color-primary)] w-56 h-[61px] text-white font-medium rounded-[50px] hover:bg-[var(--color-primary)] transition duration-300"
      onClick={handleBook}>Book Session</button>
    </>
  );
}

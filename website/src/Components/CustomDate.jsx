import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../src/custom.css";
export default function CustomDate() {
  const [date, setDate] = useState(null);
  return (
    <div className="font-secondary gap-1.5">
      <label htmlFor="" className=" pr-4 text-2xl font-semibold">Selected Date:</label>
 
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        dateFormat="MMM d, yyyy"
        minDate={new Date()}
        placeholderText="Click to select a date"
        calendarStartDay={0}
        className="border-1 border-amber-50 h-[55px] rounded-2xl p-2"
      />
      </div>
  );
}

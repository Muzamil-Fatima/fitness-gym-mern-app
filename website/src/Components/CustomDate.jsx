import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../src/custom.css";
export default function CustomDate() {
  const [date, setDate] = useState(null);
  return (
    <div className="font-secondary gap-1.5">
      <label htmlFor="">Selected Date:</label>
 
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        dateFormat="MMM d, yyyy"
        minDate={new Date()}
        placeholderText="Click to select a date"
        className=""
        calendarStartDay={0}
      />
      </div>
  );
}

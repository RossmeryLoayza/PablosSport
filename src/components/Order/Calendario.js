import React,{ useState }  from "react";
import DatePicker from "react-datepicker";

export function Calendario() {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    );
};
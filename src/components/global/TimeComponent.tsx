import React, { useState, useEffect } from "react";
import Lang from "../../assets/icons/Lang.svg";
const TimeComponent = () => {
  const [time, setTime] = useState<string>("00:00:00 00");
  const [date, setDate] = useState<string>("00/00/0000");
  const [message, setMessage] = useState<string>("Have a nice day...");
  const test = new Date();
  useEffect(() => {
    setTimeout(() => {
      const time = test.toLocaleTimeString("en-us");
      const date = test.toLocaleDateString("en-us");
      setTime(time);
      setDate(date);
    }, 1000);
  }, [time]);

  return (
    <div className="flex items-center truncate space-x-10">
      <div className="flex space-x-1 items-center">
        <img src={Lang} alt="language" />
        <select>
          <option className="outline-none ring-0 border-0 sty">
            English (US)
          </option>
        </select>
      </div>
      <div>
        <h3 className="font-medium">{message}</h3>
        <div className="flex space-x-2">
          <h5 className="text-sm font-medium">{date}</h5>
          <h5 className="text-sm font-medium">{time}</h5>
        </div>
      </div>
    </div>
  );
};

export default TimeComponent;

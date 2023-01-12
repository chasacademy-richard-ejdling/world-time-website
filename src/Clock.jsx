import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { timeZones } from "./timeZones";

export default function Clock({ cityKey }) {
  const timeZoneData = timeZones[cityKey]

  let date = new Date().toLocaleTimeString("sv-SE", { timeZone: timeZoneData.timeZone })
  const [time, setTime] = useState(date);

  
  useEffect(() => {
    setInterval(() => {
      date = new Date().toLocaleTimeString("sv-SE", { timeZone: timeZoneData.timeZone })
      setTime(date);
    }, 1000);
  }, []);

  return (
    <div
      className="flex md:flex-col justify-between items-center 
    md:items-start p-6 bg-slate-200 rounded-md w-full md:w-fit"
    >
      <div className="text-lg text-gray-600">{timeZoneData.city}</div>
      <div className="text-3xl text-gray-900 font-semibold font-mono">
        {time}
      </div>
      <div className=" text-gray-600 underline hover:text-gray-400"><Link to={`clock/${cityKey}`}>bigger</Link></div>
    </div>
  );
}

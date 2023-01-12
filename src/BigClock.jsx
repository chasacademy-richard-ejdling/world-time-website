import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { timeZones } from "./timeZones";



export default function BigClock() {
  const params = useParams()
  
  const timeZoneData = timeZones[params.cityKey]

  let date = new Date().toLocaleTimeString("sv-SE", { timeZone: timeZoneData.timeZone })
  const [time, setTime] = useState(date);
  
  useEffect(() => {
    setInterval(() => {
      date = new Date().toLocaleTimeString("sv-SE", { timeZone: timeZoneData.timeZone })
      setTime(date);
    }, 1000);
  }, []);

  return (
    <div className="bg-slate-200 rounded-md w-fit p-8 max-md:w-full max-md:flex max-md:justify-between max-md:items-center max-md:min-w-fit max-md:gap-4 max-[525px]:flex-col max-[525px]:gap-2">
      <div className="text-gray-600 text-4xl max-sm:text-3xl">{timeZoneData.city}</div>
      <div className="text-blue-700 font-bold">{timeZoneData.country.toUpperCase()}</div>
      <div className="font-mono text-6xl text-gray-900 font-semibold max-sm:text-4xl">{time}</div>
    </div>
  );
}

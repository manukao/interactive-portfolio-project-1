import { useState, useEffect } from "react";

const useLocalTime = (timezone) => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        hourCycle: "h23",
        hour: "2-digit",
        minute: "2-digit",
      });
      const localTimeInTimeZone = formatter.format(now);
      setLocalTime(localTimeInTimeZone);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timezone]);

  return localTime;
};

export default function LocalTime({ timezone }) {
  const localTime = useLocalTime(timezone);
  return <>⌚️{localTime}</>;
}

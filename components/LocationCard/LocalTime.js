import { useState, useEffect } from "react";

const LocalTime = ({ timezone }) => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const localTimeInTimeZone = now.toLocaleTimeString("en-US", {
        timeZone: timezone,
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });
      setLocalTime(localTimeInTimeZone);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timezone]);

  return <>⌚️{localTime}</>;
};

export default LocalTime;

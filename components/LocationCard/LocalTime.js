import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TimeBadge = styled.div`
  background: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

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

  return <TimeBadge>⌚️{localTime}</TimeBadge>;
};

export default LocalTime;

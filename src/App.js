import React, { useState, useEffect } from "react";
import "./App.css";

const MORNING = { start: 6, end: 14 };
const AFTERNOON = { start: 14, end: 22 };
const NIGHT = { start: 22, end: 6 };
const workHours = [MORNING, MORNING, AFTERNOON, NIGHT, NIGHT, AFTERNOON];

const getLastWorkDay = () => new Date("2023-04-01T14:00:00"); // Set the last workday date and time (YYYY-MM-DDTHH:MM:SS)

const getTimeDifference = (currentDate, lastWorkDay) => (currentDate - lastWorkDay) / (1000 * 60 * 60 * 24);

function App() {
  const [status, setStatus] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    const calculateStatus = () => {
      const currentDate = new Date();
      const lastWorkDay = getLastWorkDay();
      const timeDifference = getTimeDifference(currentDate, lastWorkDay);
      console.log(timeDifference)
      const daysDifference = Math.floor(timeDifference);

      console.log("daysDifference " + daysDifference)

      if (daysDifference >= 0 && daysDifference < 4) {
        const remaining = 3 - daysDifference;
        setStatus(`Lars is free, ${remaining} days remaining until work`);
        setBackgroundColor("green");
      } else {
        const workDay = ((daysDifference - 1) + 6) % 6;
        const workDaySchedule = workHours[workDay];
        setStatus(
          `Lars is working today, day ${workDay + 1} out of 6 (${workDaySchedule.start}:00-${workDaySchedule.end}:00)`
        );

        setBackgroundColor("#B22222");
      }
    };

    calculateStatus();
  }, []);

  return (
    <div className="App" style={{ backgroundColor }}>
      <h1>{status}</h1>
    </div>
  );
}

export default App;

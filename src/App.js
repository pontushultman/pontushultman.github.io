import React, { useState, useEffect } from "react";
import "./App.css";

const MORNING = { start: 6, end: 14 };
const AFTERNOON = { start: 14, end: 22 };
const NIGHT = { start: 22, end: 6 };
const workHours = [MORNING, MORNING, AFTERNOON, NIGHT, NIGHT, AFTERNOON];
const FREEDAYS = 4


function getDateWithoutTime(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function getCurrentCycleDay(dateString) {
  const cycleLength = 10;
  const startDate = getDateWithoutTime(new Date("2023-03-27"));
  const inputDate = getDateWithoutTime(new Date(dateString));

  // Calculate the difference between the input date and the start date in milliseconds

  console.log("startDate" + startDate)
  console.log("inputDate" + inputDate)

  const diffInMilliseconds = inputDate - startDate;

  // Convert the difference to days
  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

  console.log("diffinDays" + diffInDays)

  // Calculate the current cycle day using the modulo operator
  const currentCycleDay = Math.abs((diffInDays % cycleLength));

  return currentCycleDay;
}

// Refactored calculateStatus function to accept a date parameter
export function calculateStatus(currentDate) {
  const daysIntoCycle = getCurrentCycleDay(currentDate);
  console.log(daysIntoCycle)


  if (daysIntoCycle >= 6 && daysIntoCycle < 10) {
    const day = Math.abs(10 - daysIntoCycle - FREEDAYS) + 1;
    return { status: `Lars is free, day ${day} out of ${FREEDAYS}`, backgroundColor: "green" };
  }




  const workDaySchedule = workHours[daysIntoCycle];
  return {
      status: `Lars is working today, day ${daysIntoCycle+1} out of 6 (${workDaySchedule.start}:00-${workDaySchedule.end}:00)`,
      backgroundColor: "#B22222"
  };


}

function App() {
  const [status, setStatus] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    // Call calculateStatus with the current date
    const result = calculateStatus(new Date());
    setStatus(result.status);
    setBackgroundColor(result.backgroundColor);
  }, []);

  return (
    <div className="App" style={{ backgroundColor }}>
      <h1>{status}</h1>
    </div>
  );
}

export default App;

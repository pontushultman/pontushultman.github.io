import React, { useState, useEffect } from "react";
import "./App.css";
import SnakeGameBoard from "./SnakeGameBoard";

const MORNING = { start: 6, end: 14 };
const AFTERNOON = { start: 14, end: 22 };
const NIGHT = { start: 22, end: 6 };
const workHours = [MORNING, MORNING, AFTERNOON, NIGHT, NIGHT, AFTERNOON];
const FREEDAYS = 4


function getDateWithoutTime(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function getCurrentCycleDay(startDate, inputDate) {
  const cycleLength = 10;

  const diffInMilliseconds = inputDate - startDate;
  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

  if(inputDate < startDate) {
    console.log("HELLO")
    return diffInDays
  }

  const currentCycleDay = Math.abs((diffInDays % cycleLength));

  return currentCycleDay;
}

export function calculateStatus(currentDate) {

  const inputDate = getDateWithoutTime(new Date(currentDate));

  const startDate = getDateWithoutTime(new Date("2023-04-14"));
  const daysIntoCycle = getCurrentCycleDay(startDate, currentDate);


  console.log(daysIntoCycle)

  if(inputDate < startDate) {
    console.log("I came here")
    return { status: `Lars is free, ${Math.abs(daysIntoCycle)} days remaining untill work.`, backgroundColor: "green" };
  }


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
    const result = calculateStatus(new Date());
    setStatus(result.status);
    setBackgroundColor(result.backgroundColor);
  }, []);

  return (
    <div className="App" style={{ backgroundColor }}>
    <div className="header">
      <h1 color='white'>{status}</h1>
    </div>
    <div className="snake-board">
      <SnakeGameBoard />
    </div>
  </div>
  );
}

export default App;

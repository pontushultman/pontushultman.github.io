import { Box } from "@mui/material"
import { useEffect, useState } from "react"

export const convertSecondsToTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds}`
}

type TimerProps = {
  state: "reset" | "give up" | "active"
}

export const Timer = ({ state }: TimerProps) => {
  const [time, setTime] = useState(60 * 15)

  useEffect(() => {
    if (state === "reset") {
      setTime(60 * 15)
    }
  }, [state])

  useEffect(() => {
    const interval = setInterval(() => {
      if (state !== "give up") setTime((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [state])

  return <Box>{convertSecondsToTime(time)}</Box>
}

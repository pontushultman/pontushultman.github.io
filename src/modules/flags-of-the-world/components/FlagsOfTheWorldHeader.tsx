import { Box, Button } from "@mui/material"
import { countryCodes } from "../../../constants/Country"
import { Timer } from "./Timer"
import { GameState } from "../FlagsOfTheWorldRoute"

type FlagsOfTheWorldHeaderProps = {
  score: number
  onGameStateChange: (state: GameState) => void
  state: GameState
}

export const FlagsOfTheWorldHeader = ({
  score,
  onGameStateChange,
  state
}: FlagsOfTheWorldHeaderProps) => {
  const handleReset = () => {
    onGameStateChange(
      state === "active" ? "give up" : state === "give up" ? "reset" : "give up"
    )
  }

  return (
    <Box
      width={"100%"}
      display="flex"
      flexDirection="row"
      alignItems="center"
      marginLeft={"20px"}
    >
      <Box>{`${score}/${countryCodes.length}`}</Box>
      <Button onClick={handleReset}>
        {state === "active"
          ? "Give up"
          : state === "give up"
          ? "Start"
          : "Give up"}
      </Button>
      <Timer state={state} />
    </Box>
  )
}

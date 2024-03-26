import { Box } from "@mui/material"
import { useEffect, useRef } from "react"
import { countryCodes } from "../../../constants/Country"
import { CountryType } from "../FlagsOfTheWorldRoute"

type FlagsOfTheWorldHeaderProps = {
  selectedCountry: CountryType | null
  score: number
}

export const FlagsOfTheWorldHeader = ({
  selectedCountry,
  score
}: FlagsOfTheWorldHeaderProps) => {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    ref.current?.focus()
  }, [selectedCountry])

  return (
    <Box width={"100%"} display="flex" flexDirection="row" alignItems="center">
      <Box>{`${score}/${countryCodes.length}`}</Box>
    </Box>
  )
}

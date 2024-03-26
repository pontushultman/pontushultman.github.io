import { Box, Typography } from "@mui/material"

import ReactCountryFlag from "react-country-flag"
import { CountryType, GameState } from "../FlagsOfTheWorldRoute"
import { GTextField } from "../../../components/input-components/TextField"
import { useEffect, useRef, useState } from "react"
import { isMatch } from "./utils"

type FlagCardProps = {
  country: CountryType
  selected: boolean
  onClick: (country: CountryType) => void
  onCorrect: () => void
  correct: boolean
  state: GameState
}

export const FlagCard = ({
  country,
  selected,
  onClick,
  onCorrect,
  correct,
  state
}: FlagCardProps) => {
  const [value, setValue] = useState("")

  useEffect(() => {
    if (selected) {
      ref.current?.focus()
    }
  }, [country, selected])

  const ref = useRef<HTMLInputElement>(null)

  const handleChange = (val: string) => {
    setValue(val)

    if (isMatch(val, country.name)) {
      onCorrect()
      setValue("")
    }
  }

  return (
    <Box width={75} height={100}>
      <ReactCountryFlag
        style={{
          height: "75%",
          width: "100%",
          opacity: selected ? 0.5 : 1
        }}
        countryCode={country.code}
        svg
        onClick={() => onClick(country)}
      />
      {correct || state === "give up" ? (
        <Box display="flex" flexDirection="row" alignItems="center">
          ✅
          <Typography fontSize={8}>
            {Array.isArray(country.name) ? country.name[0] : country.name}
          </Typography>
        </Box>
      ) : (
        <GTextField
          InputProps={{
            sx: {
              fontSize: 8,
              height: "30px"
            }
          }}
          inputRef={ref}
          onClick={(e) => onClick(country)}
          size="small"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      )}
    </Box>
  )
}

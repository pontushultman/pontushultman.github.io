import { Box, Typography } from "@mui/material"

import ReactCountryFlag from "react-country-flag"
import { CountryType } from "../FlagsOfTheWorldRoute"
import { GTextField } from "../../../components/input-components/TextField"
import { useState } from "react"
import { isMatch } from "./utils"

type FlagCardProps = {
  country: CountryType
  selected: boolean
  onClick: (country: CountryType) => void
  onCorrect: () => void
  correct: boolean
}

export const FlagCard = ({
  country,
  selected,
  onClick,
  onCorrect,
  correct
}: FlagCardProps) => {
  const [value, setValue] = useState("")

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
      {correct ? (
        <Box display="flex" flexDirection="row" alignItems="center">
          ✅
          <Typography fontSize={8}>
            {Array.isArray(country.name) ? country.name[0] : country.name}
          </Typography>
        </Box>
      ) : (
        <GTextField
          sx={{
            fontSize: 6,
            height: "40px"
          }}
          size="small"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      )}
    </Box>
  )
}

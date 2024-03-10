import { Box, Typography } from "@mui/material"

import ReactCountryFlag from "react-country-flag"
import { CountryType } from "../FlagsOfTheWorldRoute"

type FlagCardProps = {
  country: CountryType
  selected: boolean
  onClick: (country: CountryType) => void
  correct: boolean
}

export const FlagCard = ({
  country,
  selected,
  onClick,
  correct
}: FlagCardProps) => {
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
      {correct && (
        <Box display="flex" flexDirection="row" alignItems="center">
          ✅ <Typography fontSize={8}>{country.name}</Typography>
        </Box>
      )}
    </Box>
  )
}

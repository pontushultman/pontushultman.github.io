import { Box } from "@mui/material"
import { countryCodes } from "../../../constants/Country"
import { GTextField } from "../../../components/input-components/TextField"
import { useEffect, useRef, useState } from "react"
import { CountryType } from "../FlagsOfTheWorldRoute"

type FlagsOfTheWorldHeaderProps = {
  selectedCountry: CountryType | null
  score: number
  onCorrect: () => void
}

export const FlagsOfTheWorldHeader = ({
  selectedCountry,
  score,
  onCorrect
}: FlagsOfTheWorldHeaderProps) => {
  const [current, setCurrent] = useState("")

  const ref = useRef<HTMLInputElement>(null)

  const onChange = (val: string) => {
    setCurrent(val)
    if (val.toLowerCase() === selectedCountry?.name.toLowerCase()) {
      onCorrect()
      setCurrent("")
    }
  }

  useEffect(() => {
    ref.current?.focus()
  }, [selectedCountry])

  return (
    <Box width={"100%"} display="flex" flexDirection="row" alignItems="center">
      <Box>
        <GTextField
          inputRef={ref}
          label="Country"
          value={current}
          onChange={(val) => onChange(val.currentTarget.value)}
        />
      </Box>
      <Box>{`${score}/${countryCodes.length}`}</Box>
    </Box>
  )
}

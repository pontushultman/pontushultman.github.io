import { Box } from "@mui/material"
import { useCallback, useEffect, useState } from "react"
import { countryCodes, getCountryName } from "../../constants/Country"
import { FlagCard } from "./components/FlagCard"
import { FlagsOfTheWorldHeader } from "./components/FlagsOfTheWorldHeader"

export type CountryType = {
  name: string[] | string
  code: string
}

export type GameState = "reset" | "give up" | "active"

export const FlagsOfTheWorldRoute = () => {
  const [score, setScore] = useState(0)
  const [selectedCountry, setSelectedCountry] = useState<CountryType | null>(
    null
  )
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [countries, setCountries] = useState<CountryType[]>([])
  const [state, setState] = useState<GameState>("active")

  const [correctCountries, setCorrectCountries] = useState<
    Record<string, boolean>
  >({})

  const getNextNotCorrectedCountry = useCallback(() => {
    const nextCountry = null
    let currentIndex = selectedIndex ? selectedIndex + 1 : 0

    while (nextCountry === null && currentIndex < countries.length) {
      if (!correctCountries[countries[currentIndex].code]) {
        setSelectedIndex(currentIndex)
        return countries[currentIndex]
      }
      currentIndex++
    }
    return nextCountry
  }, [correctCountries, countries, selectedIndex])

  useEffect(() => {
    const handleKeyDownEvent = (event: KeyboardEvent) => {
      console.log(event.key)
      if (event.key === "Tab") {
        event.preventDefault()

        const nextCountry = getNextNotCorrectedCountry()
        if (nextCountry !== null) {
          setSelectedCountry(nextCountry)
        }
      }
      if (event.key === "ArrowRight") {
        event.preventDefault()
        const nextIndex =
          selectedIndex && selectedIndex + 1 < countries.length
            ? selectedIndex + 1
            : 0
        setSelectedIndex(nextIndex)
        setSelectedCountry(countries[nextIndex])
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        const nextIndex =
          selectedIndex && selectedIndex - 1 >= 0
            ? selectedIndex - 1
            : countries.length - 1
        setSelectedIndex(nextIndex)
        setSelectedCountry(countries[nextIndex])
      }
    }

    window.addEventListener("keydown", handleKeyDownEvent)

    return () => {
      window.removeEventListener("keydown", handleKeyDownEvent)
    }
  }, [getNextNotCorrectedCountry])

  useEffect(() => {
    const countries = countryCodes.map((code) => {
      console.log("code", code)
      const countryName = getCountryName(code)

      console.log("countryName", countryName)
      const country: CountryType = {
        name: countryName || "",
        code
      }
      return country
    })
    setCountries(countries.sort(() => Math.random() - 0.5))
  }, [])

  const handleClick = (country: CountryType, index: number) => {
    setSelectedCountry(country)
    setSelectedIndex(index)
  }

  const handleCorrect = () => {
    if (selectedCountry) {
      setCorrectCountries({ ...correctCountries, [selectedCountry.code]: true })
      setScore(score + 1)

      const nextCountry = getNextNotCorrectedCountry()
      setSelectedCountry(nextCountry)
    }
  }

  return (
    <Box
      sx={{
        marginX: "25%"
      }}
    >
      <FlagsOfTheWorldHeader
        state={state}
        onGameStateChange={(state) => setState(state)}
        score={score}
      />
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        width="100%"
        height="100%"
        justifyContent="center"
      >
        {countries.map((c, i) => (
          <Box marginX={1}>
            <FlagCard
              key={c.code}
              state={state}
              country={c}
              selected={selectedCountry?.code === c.code}
              onClick={(c) => handleClick(c, i)}
              correct={correctCountries[c.code]}
              onCorrect={handleCorrect}
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

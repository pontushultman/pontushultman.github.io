import { Box } from "@mui/material"

type PageWrapperProps = {
  children: React.ReactNode
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden"
      }}
    ></Box>
  )
}

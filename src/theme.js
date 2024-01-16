import { extendTheme, theme as base } from "@chakra-ui/react";
import "@fontsource/la-belle-aurore"
import "@fontsource/montserrat-alternates"
import "@fontsource/vt323"
import "@fontsource/montserrat"

const theme = extendTheme({
  fonts: {
    font1: `"Montserrat", sans-serif`,
    font2: `"vt323", sans-serif`
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }
});

export default theme;
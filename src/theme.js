import { extendTheme, theme as base } from "@chakra-ui/react";
import "@fontsource/la-belle-aurore"

const theme = extendTheme({
  fonts: {
    font1: `"La Belle Aurore", cursive`,
  },
});

export default theme;
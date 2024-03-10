import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Nunito Sans",
      },
    },
  },

  colors: {
    darkGray: "	#858585",
    white: "#fff",
  },
  fontWeights: {
    light: 300,
    semiBold: 600,
    extraBold: 800,
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
});

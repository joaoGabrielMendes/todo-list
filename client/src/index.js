import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import "@fontsource/poppins";

export const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#3450A1", "gray.800")(props),
        color: mode("white", "gray.800")(props),
      },
    }),
  },
  fonts: {
    heading: `'poppins', sans-serif`,
    body: `'poppins', sans-serif`,
  },
  colors: {
    brand: {
      main: "#f5e5fc",
      sec: "#041955",
      btn: "#EB06FF",
      secText: "#8D9CC7",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

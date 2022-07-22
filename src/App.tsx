import React from "react";

import { ThemeProvider } from "styled-components";
import Router from "./router";
import theme from "./theme";
import GlobalStyle from "./theme/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Router />
    </ThemeProvider>
  );
}

export default App;

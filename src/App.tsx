import React from "react";
import {
  ThemeProvider,
  createMuiTheme,
  CssBaseline,
  StylesProvider,
} from "@material-ui/core";
import Donation from "./page/Donation";

const App = (): JSX.Element => (
  <StylesProvider injectFirst>
    <ThemeProvider theme={createMuiTheme({})}>
      <CssBaseline>
        <Donation />
      </CssBaseline>
    </ThemeProvider>
  </StylesProvider>
);

export default App;

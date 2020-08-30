import React from "react";
import "./App.css";
import "./styles.scss";
import AppRouter from "./AppRouter";
import { ThemeProvider } from "@material-ui/core/styles";
import { directoryTheme } from "./directoryTheme";

function App() {
  return (
    <ThemeProvider theme={directoryTheme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;

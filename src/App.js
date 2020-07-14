import React from "react";
import Weather from "./components/Weather";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Weather />
    </div>
  );
}

export default App;

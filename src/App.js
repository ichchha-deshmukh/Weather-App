import React from "react";
import Loading from "./components/Loading";
import Weather from "./components/Weather";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      {/* <Loading /> */}
      <Weather />
    </div>
  );
}

export default App;

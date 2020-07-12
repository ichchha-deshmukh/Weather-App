import React from "react";
import Loading from "./components/Loading";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Loading />
    </div>
  );
}

export default App;

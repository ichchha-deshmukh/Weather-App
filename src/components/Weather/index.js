import React from "react";
import TemperatureConverter from "../TemperatureConverter";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    backgroundColor: "lightBlue",
  },
}));

export default function Weather() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <TemperatureConverter />
    </Container>
  );
}

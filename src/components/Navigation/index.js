import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";
import arrow from "../../assets/Arrow.png";
import "../Navigation/styles.css";

const useStyles = makeStyles((theme) => ({
  imageButton: {
    padding: "1rem",
  },
  imageButtonRight: {
    transform: "rotate(180deg)",
  },
  imageSrc: {
    height: "2.5rem",
    width: "5rem",
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
}));

export default function Navigation() {
  const classes = useStyles();

  return (
    <div className="navigation-wrapper">
      <ButtonBase className={classes.imageButton}>
        <div
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${arrow})`,
          }}
        />
      </ButtonBase>

      <ButtonBase
        className={`${classes.imageButton} ${classes.imageButtonRight}`}
      >
        <div
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${arrow})`,
          }}
        />
      </ButtonBase>
    </div>
  );
}

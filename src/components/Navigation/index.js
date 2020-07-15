import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";
import arrow from "../../assets/Arrow.png";
import "../Navigation/styles.css";
import { incrementCount, decrementCount, selectActiveCount } from "./slice";
import { useDispatch, useSelector } from "react-redux";

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
  const dispatch = useDispatch();
  const activeCount = useSelector(selectActiveCount);

  return (
    <div className="navigation-wrapper">
      <ButtonBase
        style={{ visibility: activeCount === 0 ? "hidden" : "visible" }}
        className={classes.imageButton}
        onClick={() => dispatch(decrementCount())}
      >
        <div
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${arrow})`,
          }}
        />
      </ButtonBase>

      <ButtonBase
        style={{ visibility: activeCount === 4 ? "hidden" : "visible" }}
        className={`${classes.imageButton} ${classes.imageButtonRight}`}
        onClick={() => dispatch(incrementCount())}
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

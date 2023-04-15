import React from "react";
import classes from "./RowGrid.module.scss";

const Row = (props) => {
  return <div className={classes.row}>{props.children}</div>;
};

export default Row;

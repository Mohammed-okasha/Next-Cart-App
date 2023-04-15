import React from "react";
import classes from "./Banner.module.scss";

const Banner = (props) => {
  return (
    <section className={classes.banner}>
      <h1 className={classes.page_title}>{props.pageTitle}</h1>
    </section>
  );
};

export default Banner;

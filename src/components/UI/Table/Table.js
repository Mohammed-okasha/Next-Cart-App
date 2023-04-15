import React from "react";
import TableHead from "./TableHead";
import classes from "./Table.module.scss";

const Table = (props) => {
  return (
    <div className={classes.table_wrapper}>
      <table className={classes.table}>
        <TableHead className={classes.table_head} />
        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
};

export default React.memo(Table);

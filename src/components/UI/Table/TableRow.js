import classes from "./TableRow.module.scss";

const TableRow = (props) => {
  return <tr className={classes.table_row}>{props.children}</tr>;
};

export default TableRow;

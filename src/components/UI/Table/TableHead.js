import React from "react";

const TableHead = (props) => {
  return (
    <thead className={props.className}>
      <tr>
        <th>image</th>
        <th>title</th>
        <th>price</th>
        <th>total cost</th>
        <th>category</th>
        <th>quantity</th>
        <th></th>
      </tr>
    </thead>
  );
};

export default TableHead;

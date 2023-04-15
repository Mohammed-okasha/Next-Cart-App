import React from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import classes from "./ActionsButtons.module.scss";

const ActionsButtons = (props) => {
  return (
    <>
      <td>
        <div className={classes.quantity_actions}>
          <button
            className={classes.quant_btn}
            onClick={props.onDecrease}
            disabled={props.isOne}
          >
            <FaMinus />
          </button>
          <span>{props.quantity}</span>
          <button className={classes.quant_btn} onClick={props.onIncrease}>
            <FaPlus />
          </button>
        </div>
      </td>
      <td>
        <button className={classes.remove_btn} onClick={props.onOpenConfirm}>
          <FaTrash />
        </button>
      </td>
    </>
  );
};

export default React.memo(ActionsButtons);

import React from "react";
import Button from "../UI/Button";
import classes from "./CartFooter.module.scss";

const CartFooter = (props) => {
  return (
    <div className={classes.cart_footer}>
      <Button danger={true} onClick={props.onOpenConfirm}>
        clear cart
      </Button>
      <div className={classes.cart_total}>
        <span> cart total: </span>
        <strong>${props.totalCartAmount}</strong>
      </div>
    </div>
  );
};

export default React.memo(CartFooter);

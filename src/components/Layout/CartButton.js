import { useRouter } from "next/router";
import { BiCart } from "react-icons/bi";
import classes from "./CartButton.module.scss";

const CartButton = (props) => {
  const router = useRouter();

  const navigateToCart = () => {
    router.push("cart");
  };

  return (
    <button className={classes.cart_button} onClick={navigateToCart}>
      <span>
        <BiCart fontSize="1.5rem" />
      </span>
      <span className={classes.total_cart_items}>{props.totalCartItems}</span>
    </button>
  );
};

export default CartButton;

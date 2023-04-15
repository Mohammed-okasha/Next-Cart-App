import { useRouter } from "next/router";
import { FaShoppingCart } from "react-icons/fa";
import Button from "../UI/Button";
import classes from "./EmptyCart.module.scss";

const EmptyCart = () => {
  const router = useRouter();
  const navigateToHome = () => router.push("/");

  return (
    <div className={classes.empty_cart}>
      <h3>your cart is empty!</h3>
      <div className={classes.icon}>
        <FaShoppingCart />
      </div>
      <Button onClick={navigateToHome}>continue shopping</Button>
    </div>
  );
};

export default EmptyCart;

import React, { useContext } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import CartContext from "@/context/cart-context";
import Button from "../UI/Button";
import classes from "./ProductCard.module.scss";
//=========================================================================
const ProductCard = ({ product }) => {
  const ctx = useContext(CartContext);
  const router = useRouter();

  const addProductHandler = async () => {
    ctx.addCartItem(product);
    toast.success("product added successfully", {
      position: "top-left",
      autoClose: 3000,
      theme: "colored",
    });
    setTimeout(() => {
      router.push("cart");
    }, 500);
  };

  return (
    <div className={classes.product_card}>
      <div className={classes.product_img}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={classes.product_content}>
        <h4 className={classes.title}>{product.title}</h4>
        <p className={classes.describe}>
          {product.description.substring(0, 40)}
        </p>
        <div className={classes.price}>
          ${parseFloat(product.price).toFixed(2)}
        </div>
        <Button onClick={addProductHandler}>add to cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;

import { useContext, useState, useCallback } from "react";
import CartContext from "@/context/cart-context";
import { toast } from "react-toastify";
import TableRow from "../UI/Table/TableRow";
import CartItemData from "./CartItemData";
import ActionsButtons from "./ActionsButtons";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
//==========================================================
const CartItem = ({ item }) => {
  const [confirmIsOpen, setConfirmIsOpen] = useState(false);
  const ctx = useContext(CartContext);

  // Open Confirm Handler
  const openConfirmHandler = useCallback(() => setConfirmIsOpen(true), []);
  // Close Confirm Handler
  const closeConfirmHandler = () => setConfirmIsOpen(false);

  // increase Quantity Handler
  const increaseQuantityHandler = useCallback(() => {
    ctx.addCartItem(item);
    toast.success("product quantity updated", {
      position: "top-left",
      autoClose: 3000,
      theme: "colored",
    });
  }, []);
  // decrease Quantity Handler
  const decreaseQuantityHandler = useCallback(() => {
    ctx.decreaseItemQuantity(item.id);
    toast.success("product quantity updated", {
      position: "top-left",
      autoClose: 3000,
      theme: "colored",
    });
  }, []);
  // Remove Item Handler
  const removeItemHandler = () => {
    ctx.removeCartItem(item.id);
    toast.success("product removed successfully", {
      position: "top-left",
      autoClose: 3000,
      theme: "colored",
    });
  };

  // if quantity Is One => i should disabled (increase Button)
  const quantityIsOne = item.quantity === 1;

  return (
    <>
      {confirmIsOpen && (
        <ConfirmModal
          title="remove"
          message={"are sure you want remove this product!"}
          onRemove={removeItemHandler}
          onCloseConfirm={closeConfirmHandler}
        />
      )}
      <TableRow>
        <CartItemData cartItem={item} />
        <ActionsButtons
          quantity={item.quantity}
          onOpenConfirm={openConfirmHandler}
          onIncrease={increaseQuantityHandler}
          onDecrease={decreaseQuantityHandler}
          isOne={quantityIsOne}
        />
      </TableRow>
    </>
  );
};

export default CartItem;

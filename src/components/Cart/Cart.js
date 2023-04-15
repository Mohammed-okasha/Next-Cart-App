import { useContext, useState, useCallback, useMemo } from "react";

import CartContext from "@/context/cart-context";
import { toast } from "react-toastify";
import Section from "../UI/Layouts/Section";
import Table from "../UI/Table/Table";
import CartItem from "../CartItem/CartItem";
import EmptyCart from "./EmptyCart";
import CartFooter from "./CartFooter";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
//==========================================================
const Cart = () => {
  const [confirmIsOpen, setConfirmIsOpen] = useState(false);
  const ctx = useContext(CartContext);

  const openConfirmHandler = useCallback(() => setConfirmIsOpen(true), []);
  const closeConfirmHandler = () => setConfirmIsOpen(false);

  const cartItems = useMemo(() => {
    return ctx.items.map((item) => <CartItem key={item.id} item={item} />);
  }, [ctx.items]);

  const cartHasItems = ctx.items.length > 0;

  // Clear Cart Handler
  const clearCartHandler = () => {
    ctx.clearCart();
    closeConfirmHandler();

    toast.success("cart cleared successfully", {
      position: "top-left",
      autoClose: 3000,
      theme: "colored",
    });
  };

  return (
    <>
      {confirmIsOpen && (
        <ConfirmModal
          title="clear"
          message="are sure you want clear cart!"
          onRemove={clearCartHandler}
          onCloseConfirm={closeConfirmHandler}
        />
      )}
      <Section title="cart">
        {cartHasItems && (
          <>
            <Table>{cartItems}</Table>
            <CartFooter
              onOpenConfirm={openConfirmHandler}
              totalCartAmount={ctx.totalAmount}
            />
          </>
        )}
        {!cartHasItems && <EmptyCart />}
      </Section>
    </>
  );
};

export default Cart;

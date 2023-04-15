import { useReducer, useEffect } from "react";
import CartContext from "./cart-context";
import cartReducer from "./cart-reducer";
//=============================================================
export const defaultCartState = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
};
//=============================================================
const CartProvider = (props) => {
  const [cart, dispatch] = useReducer(cartReducer, defaultCartState);

  // Add Cart Item
  const addCartItem = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  // Decrease Item Quantity
  const decreaseItemQuantity = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", id: id });
  };

  // Remove Cart Item
  const removeCartItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id: id });
  };

  // Clear Cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // Updated Cart
  const updatedCart = (items) => {
    dispatch({ type: "UPDATED_CART", cartItems: items });
  };

  const ctx = {
    items: cart.items,
    totalItems: cart.totalItems,
    totalAmount: cart.totalAmount,
    addCartItem,
    decreaseItemQuantity,
    removeCartItem,
    clearCart,
  };

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    updatedCart(savedCart ? savedCart : []);
  }, []);

  return (
    <CartContext.Provider value={ctx}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;

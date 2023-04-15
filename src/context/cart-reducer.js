import { defaultCartState } from "./CartProvider";
//=========================================================================
// Save Cart
const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
//=========================================================================
// Get Cart Values
const getCartValues = (values, item) => {
  const { price, quantity } = item;

  const itemPrice = price * quantity;
  values.totalCartAmount += itemPrice;
  values.totalCartItems += quantity;

  return values;
};
//=========================================================================
const cartReducer = (state = defaultCartState, action) => {
  if (action.type === "ADD_TO_CART") {
    const exitingItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );

    const exitingItem = state.items[exitingItemIndex];

    // Updated Cart Items
    let updatedCartItems;

    if (exitingItem) {
      const updatedItem = {
        ...exitingItem,
        quantity: exitingItem.quantity + 1,
      };

      updatedCartItems = [...state.items];

      updatedCartItems[exitingItemIndex] = updatedItem;
    } else {
      const cartItem = { ...action.payload, quantity: 1 };
      updatedCartItems = state.items.concat(cartItem);
    }

    // Get And Update Cart Values (destruction Cart Values)
    const { totalCartAmount, totalCartItems } = updatedCartItems.reduce(
      getCartValues,
      { totalCartAmount: 0, totalCartItems: 0 }
    );

    // save Cart
    saveCart(updatedCartItems);

    return {
      items: updatedCartItems,
      totalItems: totalCartItems,
      totalAmount: parseFloat(totalCartAmount).toFixed(2),
    };
  }

  if (action.type === "DECREASE_QUANTITY") {
    const updatedCartItems = state.items.map((item) => {
      if (item.id === action.id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }

      return item;
    });

    // Get And Update Cart Values (destruction Cart Values)
    const { totalCartAmount, totalCartItems } = updatedCartItems.reduce(
      getCartValues,
      { totalCartAmount: 0, totalCartItems: 0 }
    );

    // save Cart
    saveCart(updatedCartItems);

    return {
      items: updatedCartItems,
      totalItems: totalCartItems,
      totalAmount: parseFloat(totalCartAmount).toFixed(2),
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const updatedCartItems = state.items.filter(
      (item) => item.id !== action.id
    );

    // Get And Update Cart Values (destruction Cart Values)
    const { totalCartAmount, totalCartItems } = updatedCartItems.reduce(
      getCartValues,
      { totalCartAmount: 0, totalCartItems: 0 }
    );

    // save Cart
    saveCart(updatedCartItems);

    return {
      items: updatedCartItems,
      totalItems: totalCartItems,
      totalAmount: parseFloat(totalCartAmount).toFixed(2),
    };
  }

  if (action.type === "CLEAR_CART") {
    localStorage.removeItem("cart");

    return {
      items: [],
      totalItems: 0,
      totalAmount: 0,
    };
  }

  if (action.type === "UPDATED_CART") {
    // Get And Update Cart Values (destruction Cart Values)
    const { totalCartAmount, totalCartItems } = action.cartItems.reduce(
      getCartValues,
      { totalCartAmount: 0, totalCartItems: 0 }
    );

    return {
      items: action.cartItems,
      totalItems: totalCartItems,
      totalAmount: parseFloat(totalCartAmount).toFixed(2),
    };
  }
};

export default cartReducer;

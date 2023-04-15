import React from "react";

const CartItemData = ({ cartItem }) => {
  // total Cart Item Cost
  const totalItemCost = parseFloat(cartItem.price * cartItem.quantity).toFixed(
    2
  );

  return (
    <>
      <td>
        <img src={cartItem.image} alt={cartItem.title} />
      </td>
      <td>
        <span>{cartItem.title.substring(0, 10)}</span>
      </td>
      <td>
        <span>${parseFloat(cartItem.price).toFixed(2)}</span>
      </td>
      <td>
        <span>${totalItemCost}</span>
      </td>
      <td>
        <span>{cartItem.category}</span>
      </td>
    </>
  );
};

export default React.memo(CartItemData);

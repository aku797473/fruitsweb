import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function CartButton() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <NavLink to="/cart" className="relative">
      <FaShoppingCart className="text-2xl text-gray-700" />
      {totalQty > 0 && (
        <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {totalQty}
        </span>
      )}
    </NavLink>
  );
}

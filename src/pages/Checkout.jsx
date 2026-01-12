import React from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-green-600">Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center mt-4">Your cart is empty.</p>
      ) : (
        <ul className="mt-4">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between border p-2 mb-2">
              <span>{item.name}</span>
              <span>Qty: {item.quantity}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../redux/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 min-h-screen bg-red-300">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
      YOUR ITEMS
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-6">
          {/* Cart Items */}
          <ul className="divide-y divide-gray-200 mb-6">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex flex-col sm:flex-row justify-between items-center py-3"
              >
                {/* Item Info */}
                <div className="flex items-center space-x-4">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded object-cover"
                    />
                  )}
                  <div>
                    <h2 className="font-semibold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-2 mt-3 sm:mt-0">
                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity - 1,
                        })
                      )
                    }
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="px-2 font-medium">{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity + 1,
                        })
                      )
                    }
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>

                  {/* Remove Item */}
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>

                {/* Subtotal per Item */}
                <div className="mt-3 sm:mt-0 font-semibold text-gray-700">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </li>
            ))}
          </ul>

          {/* Price Receipt */}
          <div className="border-t pt-4">
            <h2 className="text-xl font-bold mb-2">Total Receipt</h2>
            <p className="text-gray-800 text-lg font-semibold">
              Total: ${totalPrice.toFixed(2)}
            </p>

            {/* Clear Cart */}
            <button
              onClick={() => dispatch(clearCart())}
              className="mt-4 w-full py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

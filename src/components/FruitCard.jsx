import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function FruitCard({ fruit }) {
  const [showDescription, setShowDescription] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: fruit.id,
        name: fruit.name,
        price: fruit.price,
        quantity: 1,
      })
    );
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
      <img
        src={fruit.image}
        alt={fruit.name}
        className="w-full h-44 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{fruit.name}</h2>
      <p className="text-green-700 font-bold mb-3">${fruit.price}</p>

      {/* About Section */}
      <button
        onClick={() => setShowDescription(!showDescription)}
        className="text-blue-600 hover:underline mb-3 focus:outline-none"
      >
        {showDescription ? "Hide Details" : "About This Variety"}
      </button>

      {showDescription && (
        <div className="text-gray-700 text-sm mb-3">{fruit.description}</div>
      )}

      {/* Add to Cart */}
      <button
        onClick={handleAddToCart}
        className="w-full py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
}

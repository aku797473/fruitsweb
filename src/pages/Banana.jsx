import React, { useState } from "react";
import FruitCard from "../components/FruitCard";

const bananas = [
  {
    id: 1,
    name: "Cavendish",
    price: 1,
    image: "/images/banana1.jpg",
    description:
      "Cavendish bananas are the most common variety, sweet and soft, perfect for eating raw or in smoothies.",
  },
  {
    id: 2,
    name: "Red Banana",
    price: 1.2,
    image: "/images/banana2.jpg",
    description:
      "Red Bananas have a reddish-purple skin and are sweeter than yellow bananas with a hint of raspberry flavor.",
  },
  {
    id: 3,
    name: "Lady Finger",
    price: 1.5,
    image: "/images/lady1.jpg",
    description:
      "Lady Finger bananas are small, sweet, and creamy, ideal for snacking and desserts.",
  },
  {
    id: 4,
    name: "Blue Java",
    price: 1.8,
    image: "/images/blue.jpg",
    description:
      "Blue Java bananas are also called 'ice cream bananas' due to their creamy texture and vanilla-like flavor.",
  },
  {
    id: 5,
    name: "Plantain",
    price: 1.3,
    image: "/images/banana5.jpg",
    description:
      "Plantains are starchy and less sweet, typically cooked or fried, popular in savory dishes.",
  },
  {
    id: 6,
    name: "Burro",
    price: 1.4,
    image: "/images/banana6.jpg",
    description:
      "Burro bananas are short and chunky with a tangy-sweet flavor, great for baking and frying.",
  },
];

export default function Banana() {
  const [search, setSearch] = useState("");
  const filteredBananas = bananas.filter((fruit) =>
    fruit.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-red-400 min-h-screen">
      <input
        type="text"
        placeholder="Search Banana Variety..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-yellow-300"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredBananas.length > 0 ? (
          filteredBananas.map((fruit) => <FruitCard key={fruit.id} fruit={fruit} />)
        ) : (
          <p className="text-center text-gray-500 mt-4">No banana variety found.</p>
        )}
      </div>
    </div>
  );
}

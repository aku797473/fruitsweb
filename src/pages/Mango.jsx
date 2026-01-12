import React, { useState } from "react";
import FruitCard from "../components/FruitCard";

const base = import.meta.env.BASE_URL;

const mangoes = [
  {
    id: 1,
    name: "Alphonso",
    price: 5,
    image: base + "images/mango1.jpg",
    description:
      "Alphonso is known for its rich flavor, sweetness, and smooth texture. Ideal for desserts and smoothies.",
  },
  {
    id: 2,
    name: "Kesar",
    price: 4,
    image: base + "images/mango2.jpg",
    description:
      "Kesar mangoes are sweet and fragrant, perfect for making jams, shakes, and fresh consumption.",
  },
  {
    id: 3,
    name: "Dasheri",
    price: 3.5,
    image: base + "images/mango3.jpg",
    description:
      "Dasheri mangoes are juicy with a tangy-sweet taste, widely used in India for desserts and juices.",
  },
  {
    id: 4,
    name: "Langra",
    price: 4.2,
    image: base + "images/mango4.jpg",
    description:
      "Langra mangoes have a unique sweet-tart flavor and are soft and fibrous, great for eating fresh.",
  },
  {
    id: 5,
    name: "Himsagar",
    price: 5.5,
    image: base + "images/mango5.jpg",
    description:
      "Himsagar is very sweet and fiberless, highly prized for its aroma and creamy texture.",
  },
  {
    id: 6,
    name: "Banganapalli",
    price: 4.8,
    image: base + "images/mango6.jpg",
    description:
      "Banganapalli mangoes are large, sweet, and non-fibrous, perfect for fresh eating and juices.",
  },
];

export default function Mango() {
  const [search, setSearch] = useState("");

  const filteredMangoes = mangoes.filter((fruit) =>
    fruit.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-green-200 min-h-screen">
      <input
        type="text"
        placeholder="Search Mango Variety..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 p-3 border border-green-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredMangoes.length > 0 ? (
          filteredMangoes.map((fruit) => (
            <FruitCard key={fruit.id} fruit={fruit} />
          ))
        ) : (
          <p className="text-center text-gray-500 mt-4">
            No mango variety found.
          </p>
        )}
      </div>
    </div>
  );
}

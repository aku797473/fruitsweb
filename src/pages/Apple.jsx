import React, { useState } from "react";
import FruitCard from "../components/FruitCard";

const base = import.meta.env.BASE_URL;

const apples = [
  {
    id: 1,
    name: "Red Delicious",
    price: 3,
    image: base + "images/apple1.jpg",
    description:
      "Red Delicious apples are sweet, juicy, and perfect for snacking or adding to salads.",
  },
  {
    id: 2,
    name: "Fuji",
    price: 4,
    image: base + "images/apple2.jpg",
    description:
      "Fuji apples are crisp, sweet, and ideal for fresh eating, baking, or making apple juice.",
  },
  {
    id: 3,
    name: "Honeycrisp",
    price: 4.5,
    image: base + "images/apple3.jpg",
    description:
      "Honeycrisp apples are very crisp and juicy, known for their balanced sweetness and tartness.",
  },
  {
    id: 4,
    name: "Granny Smith",
    price: 3.8,
    image: base + "images/apple4.jpg",
    description:
      "Granny Smith apples are tart and crisp, perfect for baking, cooking, and salads.",
  },
  {
    id: 5,
    name: "Golden Delicious",
    price: 3.5,
    image: base + "images/apple5.jpg",
    description:
      "Golden Delicious apples are sweet with a mellow flavor, great for snacking and cooking.",
  },
  {
    id: 6,
    name: "Gala",
    price: 4,
    image: base + "images/gala.jpg",
    description:
      "Gala apples are mild and sweet with a thin skin, perfect for eating fresh or adding to desserts.",
  },
];

export default function Apple() {
  const [search, setSearch] = useState("");

  const filteredApples = apples.filter((fruit) =>
    fruit.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-red-400 min-h-screen">
      <input
        type="text"
        placeholder="Search Apple Variety..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 p-3 border border-pink-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-300"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredApples.length > 0 ? (
          filteredApples.map((fruit) => (
            <FruitCard key={fruit.id} fruit={fruit} />
          ))
        ) : (
          <p className="text-center text-gray-500 mt-4">
            No apple variety found.
          </p>
        )}
      </div>
    </div>
  );
}

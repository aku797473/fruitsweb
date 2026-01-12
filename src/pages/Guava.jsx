import React, { useState } from "react";
import FruitCard from "../components/FruitCard";

const guavas = [
  {
    id: 1,
    name: "White Guava",
    price: 2,
    image: "/images/guava1.jpg",
    description:
      "White Guava has a sweet and mild flavor, soft texture, perfect for fresh eating or making juices.",
  },
  {
    id: 2,
    name: "Red Guava",
    price: 2.5,
    image: "/images/guava2.jpg",
    description:
      "Red Guava is rich in antioxidants, juicy and flavorful, ideal for smoothies and fresh consumption.",
  },
  {
    id: 3,
    name: "Pink Guava",
    price: 3,
    image: "/images/guava3.jpg",
    description:
      "Pink Guava is aromatic and sweet with a beautiful pink flesh, commonly used in jams and beverages.",
  },
  {
    id: 4,
    name: "Apple Guava",
    price: 2.8,
    image: "/images/guava4.jpg",
    description:
      "Apple Guava is firm and sweet, great for salads, eating raw, or cooking desserts.",
  },
  {
    id: 5,
    name: "Strawberry Guava",
    price: 3.2,
    image: "/images/guava5.jpg",
    description:
      "Strawberry Guava is small, tangy-sweet, and aromatic, excellent for jams, sauces, and fresh eating.",
  },
  {
    id: 6,
    name: "Thai Guava",
    price: 3,
    image: "/images/guava6.jpg",
    description:
      "Thai Guava is crisp and refreshing, often eaten with dips or in Thai cuisine salads.",
  },
];

export default function Guava() {
  const [search, setSearch] = useState("");
  const filteredGuavas = guavas.filter((fruit) =>
    fruit.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-red-500 min-h-screen">
      <input
        type="text"
        placeholder="Search Guava Variety..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-300"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredGuavas.length > 0 ? (
          filteredGuavas.map((fruit) => <FruitCard key={fruit.id} fruit={fruit} />)
        ) : (
          <p className="text-center text-gray-500 mt-4">No guava variety found.</p>
        )}
      </div>
    </div>
  );
}

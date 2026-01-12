import React, { useState } from "react";
import FruitCard from "../components/FruitCard";

const papayas = [
  {
    id: 1,
    name: "Solo Papaya",
    price: 3,
    image: "/images/solo.jpg",
    description:
      "Solo Papaya is small, sweet, and juicy, perfect for fresh eating and making smoothies.",
  },
  {
    id: 2,
    name: "Red Lady",
    price: 3.5,
    image: "/images/papaya2.jpg",
    description:
      "Red Lady papayas are sweet and soft, ideal for desserts and fresh consumption.",
  },
  {
    id: 3,
    name: "Eksotika",
    price: 4,
    image: "/images/papaya3.jpg",
    description:
      "Eksotika papayas are large and aromatic, commonly used in tropical fruit salads and juices.",
  },
  {
    id: 4,
    name: "Sunrise Papaya",
    price: 3.8,
    image: "/images/papaya4.jpg",
    description:
      "Sunrise Papaya has a rich sweet flavor and smooth texture, great for snacking or smoothies.",
  },
  {
    id: 5,
    name: "Honey Papaya",
    price: 4.2,
    image: "/images/papaya5.jpg",
    description:
      "Honey Papaya is very sweet with a soft, buttery texture, perfect for fresh eating and desserts.",
  },
  {
    id: 6,
    name: "Maradol",
    price: 4.5,
    image: "/images/papaya6.jpg",
    description:
      "Maradol papayas are large and juicy with a sweet flavor, ideal for juices, smoothies, and salads.",
  },
];

export default function Papaya() {
  const [search, setSearch] = useState("");
  const filteredPapayas = papayas.filter((fruit) =>
    fruit.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-orange-500 min-h-screen">
      <input
        type="text"
        placeholder="Search Papaya Variety..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-300"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredPapayas.length > 0 ? (
          filteredPapayas.map((fruit) => <FruitCard key={fruit.id} fruit={fruit} />)
        ) : (
          <p className="text-center text-gray-500 mt-4">No papaya variety found.</p>
        )}
      </div>
    </div>
  );
}

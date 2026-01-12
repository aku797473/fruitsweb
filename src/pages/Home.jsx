import React from "react";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-500 via-orange-400 via-yellow-300 to-green-500 text-white px-4">
      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-6 drop-shadow-lg">
        Welcome to <span className="text-yellow-300">FruitsHub 🍎</span>
      </h1>

      {/* Description */}
      <p className="text-center max-w-2xl text-lg md:text-xl mb-6 drop-shadow-md">
        Discover a world of fresh and delicious fruits! Click on your favorite fruit in the navbar to explore its varieties, add them to your cart, and place orders easily.  
        From juicy mangoes to crisp apples and sweet papayas, we bring the farm-fresh goodness right to your screen!
      </p>

      {/* Call to Action */}
      <div className="flex flex-wrap gap-4 justify-center mt-6">
        <span className=  "cursor-pointer bg-white/20 px-5 py-2 rounded-full font-semibold hover:bg-white/40 transition">
          🍑 Mango
        </span>
        <span className="bg-white/20 cursor-pointer px-5 py-2 rounded-full font-semibold hover:bg-white/40 transition">
          🍎 Apple
        </span>
        <span className="bg-white/20  cursor-pointer px-5 py-2 rounded-full font-semibold hover:bg-white/40 transition">
          🥭 Guava
        </span>
        <span className="bg-white/20 cursor-pointer px-5 py-2 rounded-full font-semibold hover:bg-white/40 transition">
          🍌 Banana
        </span>
        <span className="bg-white/20 cursor-pointer px-5 py-2 rounded-full font-semibold hover:bg-white/40 transition">
          🍉 Watermelon
        </span>
      </div>

      {/* Footer Note */}
      <p className="text-sm mt-12 text-white/90">
        Fresh fruits delivered virtually at your fingertips. Enjoy the colors, taste, and goodness!
      </p>
    </div>
  );
}

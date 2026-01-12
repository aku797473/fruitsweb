import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";
import CartButton from "./components/CartButton";

// Pages
import Home from "./pages/Home";
import Mango from "./pages/Mango";
import Apple from "./pages/Apple";
import Guava from "./pages/Guava";
import Papaya from "./pages/Papaya";
import Banana from "./pages/Banana";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Page Loader */}
      {loading && <PageLoader onFinish={() => setLoading(false)} />}

      {/* Main App */}
      {!loading && (
        <div className="min-h-screen bg-gray-50">
          {/* Navbar */}
          <Navbar />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mango" element={<Mango />} />
            <Route path="/apple" element={<Apple />} />
            <Route path="/guava" element={<Guava />} />
            <Route path="/papaya" element={<Papaya />} />
            <Route path="/banana" element={<Banana />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>

          {/* Footer */}
          <Footer />

          {/* Floating Cart Button */}
          <div className="fixed bottom-6 right-6 z-50">
            <CartButton />
          </div>
        </div>
      )}
    </>
  );
}

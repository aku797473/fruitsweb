import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const [open, setOpen] = useState(false);

  const pages = ["home", "mango", "apple", "guava", "papaya", "banana"];

  const linkClass =
    "text-white font-semibold hover:text-yellow-300 transition border-b-2 border-transparent hover:border-yellow-300";

  return (
    <nav className="w-full sticky top-0 z-50 bg-gradient-to-r from-red-500 via-orange-400 via-yellow-400 to-green-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-2 text-pink text-2xl font-bold">
          <Logo />
          FruitsHub
        </NavLink>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 items-center">
          {pages.map((item) => (
            <NavLink
              key={item}
              to={item === "home" ? "/" : `/${item}`}
              className={linkClass}
            >
              {item.toUpperCase()}
            </NavLink>
          ))}

          {/* CART ICON */}
          <NavLink to="/cart" className="relative text-white">
            <FaShoppingCart className="text-2xl" />
            {totalQty > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalQty}
              </span>
            )}
          </NavLink>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-gradient-to-b from-red-500 via-yellow-400 to-green-500 px-6 py-6 flex flex-col gap-4 text-white">
          {pages.map((item) => (
            <NavLink
              key={item}
              to={item === "home" ? "/" : `/${item}`}
              onClick={() => setOpen(false)}
              className="text-lg font-semibold border-b border-white/40 pb-2"
            >
              {item.toUpperCase()}
            </NavLink>
          ))}

          <NavLink to="/cart" className="flex items-center gap-3 text-lg">
            <FaShoppingCart />
            Cart ({totalQty})
          </NavLink>
        </div>
      )}
    </nav>
  );
}

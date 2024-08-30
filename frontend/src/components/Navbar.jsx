// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { useShop } from "../context/ShopContext";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {setShowSearch, getCartCount} = useShop();
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink className="flex flex-col items-center gap-1" to={"/"}>
          <p className="uppercase">Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          className="flex flex-col items-center gap-1"
          to={"/collection"}
        >
          <p className="uppercase">Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to={"/about"}>
          <p className="uppercase">About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to={"/contact"}>
          <p className="uppercase">Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img onClick={() => setShowSearch(true)} className="w-5 cursor-pointer" src={assets.search_icon} alt="" />
        <div className="group relative">
        <Link to={'/login'}>
          <img
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt=""
          />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="" className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          src={assets.menu_icon}
          alt=""
          className="w-5 cursor-pointer sm:hidden"
          onClick={() => setVisible(true)}
        />
      </div>

      {/* Sidebar menu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className="uppercase py-2 pl-6 border"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/collection"
            className="uppercase py-2 pl-6 border"
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/about"
            className="uppercase py-2 pl-6 border"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/contact"
            className="uppercase py-2 pl-6 border"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useShop } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, setShowSearch, showSearch } = useShop();
  const location = useLocation();
  const [visible,setVisible] = useState(false)

  useEffect(() => {
    if(location.pathname.includes('collection')) {
      setVisible(true)
    }
    else {
      setVisible(false)
    }
  },[location])
  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center p-4 transition-all">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 mx-3 rounded-full w-3/4 sm:w-1/2 ">
        <input value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1 outline-none bg-inherit text-sm" type="text" placeholder="Search" />
        <img src={assets.search_icon} alt="" className="w-4"/>
      </div>
      <img onClick={() => setShowSearch(false)} src={assets.cross_icon} alt="" className="inline w-3 cursor-pointer" />
    </div>
  ) : null;
};

export default SearchBar;
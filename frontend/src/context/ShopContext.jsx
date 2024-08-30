import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate()

  const addToCart = async (itemId,size) => {

    if(!size) {
      toast.warning("Select Product Size",{position:'top-center'});
      return;
    }



    let cartData = structuredClone(cartItems);
        

    if(cartData[itemId]) {
      if(cartData[itemId][size]){
        cartData[itemId][size] += 1
      }
      else {
        cartData[itemId][size] = 1;
      }
    }
    else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
 
    setCartItems(cartData)
    toast.success("Add Product Successfully",{position:'top-center'})
  }


  const getCartCount = () => {
    let totalCount = 0;
    for(const items in cartItems){
      for(const item in cartItems[items]) {
        try {
          if(cartItems[items][item] > 0){
            totalCount += cartItems[items][item]
          }
        } catch (error) {
          console.log(error);
          
        }
      }
    }
    return totalCount
  }


  const updateQuantity = async (itemId,size,quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData)
  }



  const getCartAmount = () => {
    let totalAmount = 0;
    for(const items in cartItems){
      let itemInfo = products.find((product) => product._id === items)
        for(const item in cartItems[items]){
          try {
            if(cartItems[items][item]){
              totalAmount += itemInfo.price * cartItems[items][item];
            }
          } catch (error) {
            console.log(error)
          }
        }
    }
    return totalAmount;
  }


  const values = {
    products,
    currency,
    delivery_fee,
    search,
    showSearch,
    setSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate
  };

  return (
    <ShopContext.Provider value={values} {...props}></ShopContext.Provider>
  );
};

const useShop = () => {
  const context = useContext(ShopContext);
  if (typeof context === "undefined")
    throw new Error("UseShop must be within ShopContextProvider");
  return context;
};

export { ShopContextProvider, useShop };

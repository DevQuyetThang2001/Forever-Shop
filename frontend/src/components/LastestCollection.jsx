// eslint-disable-next-line no-unused-vars
import React, {  useEffect, useState } from "react";
import { useShop } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LastestCollection = () => {
  const { products } = useShop();
  const [lastestProducts,setLastesProducts] = useState([]);

  useEffect(() => {
    setLastesProducts(products.slice(0,10))
  },[])
  return (
    <div className="my-10 ">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

        {/* Rendering Products  */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {lastestProducts.length > 0 && lastestProducts.map((item,index) => (
            <ProductItem key={index} image={item.image} name={item.name} price={item.price} id={item._id}/>
        ))}
      </div>
    </div>
  );
};

export default LastestCollection

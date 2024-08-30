// eslint-disable-next-line no-unused-vars
import React from "react";
import { useShop } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, currency } = useShop();
  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>


      <div className=''>
            {products.slice(1,4).map((item,index) => (
                <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                    <div className='flex items-start gap-6 text-sm'>
                        <img src={item.image[0]} alt='' className='w-16 sm:w-20'/>
                        <div>
                            <p className='sm:text-base font-medium'>{item.name}</p>
                            <div className='flex items-center gap-3 mt-2 text-base text-gray-500'>
                                <p className='text-lg'>{currency} {item.price}</p>
                                <p>Quantity: 1</p>
                                <p>Size: Medium</p>
                            </div>
                            <p>Date: <span className='text-gray-400'>25, Jul, 2024</span></p>
                        </div>
                    </div>

                    <div className='md:w-1/2 flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                            <p className='text-sm sm:text-base'>Ready To Ship</p>
                        </div>
                        <button className='border border-gray-400 p-2 text-black'>Track Order</button>
                    </div>
                </div>
            ))}
      </div>
    </div>
  );
};

export default Orders;
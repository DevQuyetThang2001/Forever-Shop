import React, { useEffect, useState } from 'react';
import { useShop } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({category,subCategory}) => {
    const {products} = useShop();
    const [related,setRelated] = useState([]);

    useEffect(() => {
       if(products.length > 0){
        
        let productsCopy = products.slice();
        productsCopy = productsCopy.filter((item) => category === item.category)
        productsCopy = productsCopy.filter((item) => subCategory === item.subCategory)      
        setRelated(productsCopy.slice(0,5))
       } 
    },[products])

    // console.log(related);
    
    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={'RELATED'} text2={'PRODUCTS'} />
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
                {
                    related.length > 0 && related.map((item,index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    );
};

export default RelatedProducts;
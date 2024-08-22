"use client"
import { createContext, useEffect, useState } from "react"

export const ProductContext = createContext();
function ProductContextProvider({children}) {
    const [products, setProducts] = useState([]);
    const [allProduct, setAllProduct] = useState([]);

    useEffect(()=>{
        const fetchProductData = async ()=>{
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json();
            setProducts(data)  
            setAllProduct(data)
        }

        fetchProductData();
    },[])
  return (
    <ProductContext.Provider value={{products, setProducts, allProduct, setAllProduct}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider

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

    const [cart, setCart] = useState([]);


    const addToCart = (current)=>{
      const existProduct = cart.find((item)=>item.id==current.id)
      if (existProduct) {
        const updateProduct = cart.map((item)=>(
          item.id==current.id?{...item, quantity: item.quantity+1}:item
        ))
        setCart(updateProduct)
      }else{
        setCart([
          ...cart,
          {...current, quantity:1}
        ])
      }
    }




  return (
    <ProductContext.Provider value={{products, setProducts, allProduct, setAllProduct, cart, setCart, addToCart}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider

"use client"
import { ProductContext } from '@/context/ProductContext'
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import { CiStar } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

function Product() {
    const { products, setProducts, allProduct, setAllProduct , addToCart } = useContext(ProductContext)
    const [search, setSearch] = useState(null)


    useEffect(() => {
        searchData(search)
    }, [search])


    const searchData = (search) => {
        let filterData = products;
        if (search) {
            filterData = products.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
            setProducts(filterData)
        } else {
            setProducts(allProduct)

        }
    }


    return (

        <>
            <div className='my-14'>
                <div className='bg-slate-200 py-1 px-1 rounded-lg flex items-center mb-5'>
                    <input type="text"
                        value={search}
                        placeholder='Search item name'
                        onChange={(e) => setSearch(e.target.value)}
                        className='w-full outline-none rounded-lg px-5 py-1 bg-transparent text-black'
                    />
                    <CiSearch className='text-2xl mr-3' />

                </div>
                <div className='grid grid-cols-12  gap-3 '>
                    {
                        products && products.map((current) => (
                            <div key={current.id} className='col-span-12 md:col-span-3 bg-white p-5 shadow-lg rounded-lg border'>
                                <div className='flex justify-end items-center gap-2'>
                                    <CiStar className='' />
                                    <p>{current.rating.rate}</p>
                                </div>
                                <Link href={`/product/${current.id}`}>
                                    <img className='w-[150px] h-[150px] border-b-2 object-cover object-top flex mx-auto' src={current.image} alt="" />
                                </Link>

                                <p className='mt-3 text-slate-400'>{current.category}</p>
                                <h1 className='text-[13px]'>{current.title.slice(0, 22)}...</h1>
                                <p className='text-[12px] mt-2'>{current.description.slice(0, 55)}...</p>

                                <div className='m-2 flex justify-between '>
                                    <p className='text-red-800'>${current.price}</p>
                                    <p>sales({current.rating.count})</p>
                                </div>
                                <div className='bg-black text-white py-1 w-full px-3 rounded-lg text-center'>
                                    <button  onClick={()=>addToCart(current)}>Add to Cart</button>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>

        </>
    )
}

export default Product

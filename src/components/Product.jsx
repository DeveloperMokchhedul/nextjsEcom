"use client"
import { ProductContext } from '@/context/ProductContext'
import Link from 'next/link';
import React, { useContext } from 'react'
import { CiStar } from "react-icons/ci";

function Product() {
    const {products, setPoduct} = useContext(ProductContext)
    
  return (

    <>
    <div className='mt-14'>
        <div className='grid grid-cols-12  gap-3 '>
            {
                products && products.map((current)=>(
                    <div key={current.id} className='col-span-3 bg-white p-5 shadow-lg rounded-lg border'>
                        <div className='flex justify-end items-center gap-2'>
                            <CiStar className='' />
                            <p>{current.rating.rate}</p>
                        </div>
                        <img className='w-[150px] h-[150px] border-b-2 object-cover object-top flex mx-auto' src={current.image} alt="" />
                        <p className='mt-3 text-slate-400'>{current.category}</p>
                        <h1 className='text-[13px]'>{current.title.slice(0,22)}...</h1>
                        <p className='text-[12px] mt-2'>{current.description.slice(0,55)}...</p>

                        <div className='m-2 flex justify-between '>
                            <p className='text-red-800'>${current.price}</p>
                            <p>sales({current.rating.count})</p>
                        </div>
                        <div className='bg-black text-white py-1 w-full px-3 rounded-lg text-center'>
                        <Link  href={"/"}>Add to Cart</Link>
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

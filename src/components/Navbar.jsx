"use client"
import { ProductContext } from '@/context/ProductContext';
import Link from 'next/link'
import React, { useContext } from 'react'
import { CiShoppingCart } from "react-icons/ci";


function Navbar() {
    const {cart} = useContext(ProductContext)
    return (
        <>
            <div className='mx-[30px] py-5'>
                <nav className='container mx-auto flex justify-between'>
                    <Link href={"/"}><h1 className='text-2xl'>Logo</h1></Link>
                    <div className='flex gap-14 '>
                        <div className='flex gap-5'>
                            <Link className='{active?bg-red-500}' href={"/"}>Home</Link>
                            <Link href={"/about"}>About</Link>
                            <Link href={"/contact"}>Contact</Link>
                            <Link href={"/shop"}>Shop</Link>
                        </div>
                        <div className='flex gap-5'>
                            <div className='relative '>
                                <Link href={"/cart"}><CiShoppingCart className='text-3xl cursor-pointer'/></Link>
                                <div className='bg-red-400 w-[20px] h-[21px] absolute -top-4 -right-2 text-center  rounded-full'>
                                    <span className='text-center'>{cart.length}</span>
                                </div>
                            </div>
                            <Link href={"/"}>Login</Link>
                        </div>
                    </div>

                </nav>
            </div>

        </>
    )
}

export default Navbar

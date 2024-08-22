import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <>
            <div className='mx-[30px] bg-black text-white p-5 '>
                <div className='container mx-auto grid grid-cols-12'>
                    <div className='col-span-3'>
                        <h1 className='text-3xl mb-2'>Logo</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, necessitatibus!hey this is mokchhedul islam</p>
                    </div>

                    <div className='col-span-3'>
                        <h1 className='text-3xl mb-2'>Quick Links</h1>
                        <div className='flex flex-col gap-3'>
                            <Link href={"/about"}>About</Link>
                            <Link href={"/contact"}>Contact</Link>
                            <Link href={"/shop"}>Shop</Link>
                        </div>
                    </div>

                    <div className='col-span-3'>
                        <h1 className='text-2xl mb-2'>E-commerce Links</h1>
                        <div className='flex flex-col gap-1'>
                            <Link href={"/"}>Terms of Service</Link>
                            <Link href={"/"}>Privecy Policy</Link>
                            <Link href={"/"}>Shiping Policy</Link>
                            <Link href={"/"}>Return Policy</Link>
                        </div>
                    </div>

                    <div className='col-span-3'>
                    <h1 className='text-2xl mb-2'>Contact Us</h1>
                        <div className='flex flex-col gap-1'>
                            <Link href={"/"}>Email: <span className='text-sm'>mokchheduls46@gmail.com</span></Link>
                            <Link href={"/"}>Phone: 019000000000</Link>
                            <Link href={"/"}>Address: Pirgachha, Rangpur</Link>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer

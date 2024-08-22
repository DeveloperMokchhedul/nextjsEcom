import Image from "next/image"
import { IoBagAddOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";

function Hero() {
  return (
    <>
    <div className='grid grid-cols-12  justify-center items-center'>
        <div className='col-span-6 px-5 leading-10'>
            <h1 className='capitalize text-3xl font-bold'>Buy Your Fevorites product <br/> With Trendy Fashion <br /> from <span className='bg-red-600 rounded-lg px-1 text-3xl'>Ms46ms46</span></h1>
            <div className="bg-black flex items-center  rounded-lg bg-origin-content mt-5 text-white w-[210px] px-3 gap-5">
                <p>Latest Product</p>
                <div className="flex gap-3">
                  <IoBagAddOutline />
                  <GoArrowUpRight />
                </div>
            </div>
        </div>
        <div className='col-span-6'>
            <Image className="flex mx-auto" width="500" height="300" src={"/images/hero.png"}></Image>
        </div>
    </div>
    </>
  )
}

export default Hero

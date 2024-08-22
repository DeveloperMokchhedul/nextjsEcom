import Link from "next/link";

const fetchingSignleProduct = async (productId) => {
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
  const data = await res.json();
  return data

}



async function page({ params }) {
  const singleProduct = await fetchingSignleProduct(params.productid)
  return (
    <>
      <div className="container mx-auto grid grid-cols-12 my-10 items-center h-[calc(100vh-340px)]">
        <div className="col-span-6 ">
          <img className="w-[250px] flex mx-auto" src={singleProduct.image} alt="" />
        </div>
        <div className="col-span-6">
        <h1 className="text-2xl mb-1">{singleProduct.title}</h1>
        <p >${singleProduct.price}</p>
        <p className="text-xs my-3" >{singleProduct.description}</p>
        <Link href={"/"} className="bg-black py-1 px-3 text-white rounded-lg ">Add to cart</Link>
        <Link href={"/"} className="bg-black py-1 px-3 text-white rounded-lg  ml-10">Shop more</Link>
        </div>
      </div>
    </>
  )
}

export default page

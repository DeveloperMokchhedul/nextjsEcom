"use client"
import Hero from "@/components/Hero"
import Product from "@/components/Product"
import Title from "@/components/Title"


function page() {
  return (
    <>
      <div className="">
        <div className="container mx-auto">
          <Hero />
          <Title title={"Our Product"}  />
          <Product />
        </div>
      </div>

    </>
  )
}

export default page

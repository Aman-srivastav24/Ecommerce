import React from 'react'
import shoes from '../assets/shoes.jpg'
function ProductPage() {
    return (
        <div className='main m-4'>
            <div className='flex justify-between'>
                <span>SHOES : 43 items</span>
                <span>Product for you</span>
                <div className='flex gap-2'>
                    <label for="cars">Price</label>
                    <select name="cars" id="cars" > 
                        <option value="volvo">Low To High</option>
                        <option value="saab">High to Low</option>
                    </select>
                </div>
            </div>
            <div className='product-list mt-10'>
            <div class="relative flex flex-col   text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-[300px]">
  <div
    class="relative h-[300px]  overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 items-center">
    <img
      src={shoes}
      alt="card-image"
      className='object-cover h-[300px] w-[300px] '
      />
  </div>
  <div class="p-6">
    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Campus Shoes
    </h5>
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      Price : $ 400
    </p>
  </div>
  <div class="p-6 pt-0 flex gap-4">
    <button
      class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
      Add to Cart 
    </button>
    <button
      class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
      Buy Now
    </button>
  </div>
</div>  
            </div>
        </div>
    )
}

export default ProductPage
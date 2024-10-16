import React from 'react'

const Collection = () => {
  return (
    <div className=' flex justify-center items-center flex-col w-full lg:p-8 p-4'>
      <h1 className='my-6 text-[1.4rem] font-[500] '>Our Collection</h1>
      <div className='grid h-full sm:grid-cols-2 md:grid-cols-4 w-full gap-4'>

        <div className='img2 relative h-full w-full overflow-hidden'>
          <img src=" ../src/assets/product1.webp" className='img21 h-full w-full object-contain ' alt="" />
          <div className='before:absolute flex flex-col justify-center items-center h-full w-full
          before:h-full before:w-full before:opacity-[30%] before:hover:duration-1000 before:hover:opacity-60 before:bg-black before:content before:object-cover 
          absolute top-0'>
            <h1 className='text-[1rem] text-white relative z-2'>HONEY</h1>
          </div>
        </div>
        <div className='img2 relative h-full w-full overflow-hidden'>
          <img src=" ../src/assets/product2.webp" className='img21 h-full w-full object-contain ' alt="" />
          <div className='before:absolute flex flex-col justify-center items-center h-full w-full
          before:h-full before:w-full before:opacity-[30%] before:hover:duration-1000 before:hover:opacity-60 before:bg-black before:content before:object-cover 
          absolute top-0'>
            <h1 className='text-[1rem] text-white relative z-2'>GHEE</h1>
          </div>
        </div>
        <div className='img2 relative h-full w-full overflow-hidden'>
          <img src=" ../src/assets/product3.webp" className='img21 h-full w-full object-contain ' alt="" />
          <div className='before:absolute flex flex-col justify-center items-center h-full w-full
          before:h-full before:w-full before:opacity-[30%] before:hover:duration-1000 before:hover:opacity-60 before:bg-black before:content before:object-cover 
          absolute top-0'>
            <h1 className='text-[1rem] text-white relative z-2'>ALL PRODUCTS</h1>
          </div>
        </div>
        <div className='img2 relative h-full w-full overflow-hidden'>
          <img src=" ../src/assets/product2.webp" className='img21 h-full w-full object-contain ' alt="" />
          <div className='before:absolute flex flex-col justify-center items-center h-full w-full
          before:h-full before:w-full before:opacity-[30%] before:hover:duration-1000 before:hover:opacity-60 before:bg-black before:content before:object-cover 
          absolute top-0'>
            <h1 className='text-[1rem] text-white relative z-2'>PULSES</h1>
          </div>
        </div>
        <div className='img2 relative h-full w-full overflow-hidden'>
          <img src=" ../src/assets/product1.webp" className='img21 h-full w-full object-contain ' alt="" />
          <div className='before:absolute flex flex-col justify-center items-center h-full w-full
          before:h-full before:w-full before:opacity-[30%] before:hover:duration-1000 before:hover:opacity-60 before:bg-black before:content before:object-cover 
          absolute top-0'>
            <h1 className='text-[1rem] text-white relative z-2'>ALL PRODUCTS</h1>
          </div>
        </div>
        <div className='img2 relative h-full w-full overflow-hidden'>
          <img src=" ../src/assets/product3.webp" className='img21 h-full w-full object-contain ' alt="" />
          <div className='before:absolute flex flex-col justify-center items-center h-full w-full
          before:h-full before:w-full before:opacity-[30%] before:hover:duration-1000 before:hover:opacity-60 before:bg-black before:content before:object-cover 
          absolute top-0'>
            <h1 className='text-[1rem] text-white relative z-2'>HONEY</h1>
          </div>
        </div>
        <div className='img2 relative h-full w-full overflow-hidden'>
          <img src=" ../src/assets/product1.webp" className='img21 h-full w-full object-contain ' alt="" />
          <div className='before:absolute flex flex-col justify-center items-center h-full w-full
          before:h-full before:w-full before:opacity-[30%] before:hover:duration-1000 before:hover:opacity-60 before:bg-black before:content before:object-cover 
          absolute top-0'>
            <h1 className='text-[1rem] text-white relative z-2'>GHEE</h1>
          </div>
        </div>
        <div className='img2 relative h-full w-full overflow-hidden'>
          <img src=" ../src/assets/product2.webp" className='img21 h-full w-full object-contain ' alt="" />
          <div className='before:absolute flex flex-col justify-center items-center h-full w-full
          before:h-full before:w-full before:opacity-[30%] before:hover:duration-1000 before:hover:opacity-60 before:bg-black before:content before:object-cover 
          absolute top-0'>
            <h1 className='text-[1rem] text-white relative z-2'>ALL PRODUCTS</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection
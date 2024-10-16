import React, { useState } from 'react'
import Navbar from './Navbar'
import Cart from './Cart';


const HeroSection = () => {
    const [cartOpen, setCartOpen] = useState(false);

    const handleCartToggle = () => {
        setCartOpen(!cartOpen)
    };

    return (
        <div className=' h-screen w-full '>
            <div className='absolute z-[-2] h-full w-full '>
                <video src="../src/assets/BgIMG_5104.mp4" className='h-screen w-full object-cover' data-type='mp4' autoPlay loop muted playsInline></video>
            </div>
            <div >
                <div className='navbar'>
                <Navbar onCartToggle={handleCartToggle} />
                </div>
                <Cart isOpen={cartOpen} onCartToggle={handleCartToggle}/>
            </div>
            <div className='h-full flex-col w-full flex justify-center items-center text-center'>
                <h1 className='text-gray-100 text-5xl font-[400] sm:text-4xl lg:text-6xl '>Ethically Sourced Local Himalayan Food</h1>
                <p className='text-gray-100 m-4'>Certified by Nature</p>
                <button className='py-3 px-4 sm:py-2 sm:px-3 font-[700] text-sm bg-yellow-500'>SHOP NOW</button>
            </div>
        </div>
    )
}

export default HeroSection
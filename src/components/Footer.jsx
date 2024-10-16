import React from 'react'

const Footer = () => {
    return (
        <div className='bg-yellow-500 p-10'>
            <div className='flex sm:flex-col sm:items-center md:flex-row w-full gap-6 lg:gap-0' >
                <div className='w-[25%] sm:justify-center flex'>
                    <img src="../src/assets/Valley_culture_logo_black.webp" alt="colorlogo" />
                </div>
                <div className='sm:w-[35%] md:w-[25%] '>
                    <ul className='sm:items-center text-[10px] lg:text-[14px] flex flex-col gap-2'>
                        <li>
                            <a href="">Search</a>
                        </li>
                        <li>
                            <a href="">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="">Terms of Services</a>
                        </li>
                        <li>
                            <a href="">Shipping Policy</a>
                        </li>
                        <li>
                            <a href="">Refund Policy</a>
                        </li>
                        <li>
                            <a href="">Contact Us</a>
                        </li>
                        <li>
                            <a href="">Our Blogs</a>
                        </li>
                    </ul>
                </div>
                <div className='sm:items-center md: sm:text-[12px] lg:text-[14px] w-[45%] flex flex-col gap-4'>
                    <h3>About us nowaaa</h3>
                    <p className='flex sm:hidden md:flex'>Welcome to Valley Culture where we celebrate the rich culture and essence of Himalayan tradition through our ethically sourced, locally produced best Himalayan food .We are more than just a brand we are a movement that bridges the gap between the ancient wisdom of the Himalayas from farm to your kitchen.</p>
                </div>
            </div>
                <p className=' text-center pt-4 text-[14px] lg:text-[16px] '>© 2024 Valley Culture</p>
        </div>
    )
}

export default Footer
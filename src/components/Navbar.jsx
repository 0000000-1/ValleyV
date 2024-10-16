import React, { useContext, useState } from 'react'
import Search from './Search'


const Navbar = ({ onCartToggle }) => {
    const [searchOpen, setSearchOpen] = useState(false);

    const searchToggle = () => {
        setSearchOpen(!searchOpen)
    }


    return (
        <header className='absolute w-full h-full'>
            <div className='flex gap-4 justify-between items-center py-2 px-8 '>
                <div className='md:hidden' >
                    <span>III</span>
                    <div><a href="/">Home</a></div>
                </div>
                <span className={`sm:hidden md:flex ${searchOpen === true ? "hidden" : console.log("true")}`}  onClick={searchToggle} >Search</span>
                <Search searchopen={searchOpen} />
                <div className='flex justify-between md:justify-evenly'>
                    <ul className='sm:hidden md:flex flex gap-6 items-center md:pl-4 md:pr-4'>
                        <li><a href="/">HOME</a></li>
                        <li className='shop'><a href="">SHOP</a>
                            <div className='babyshop absolute left-0 hidden flex w-full text-black bg-white justify-center items-start'>
                                <div className="box flex flex-col justify-center items-start p-4 ">
                                    <div className=' flex gap-1 h-[100px] w-[200px]'>
                                        <img src={import.meta.env.BASE_URL + "src/assets/product1.webp"} className='img21 object-cover ' alt="" />
                                    </div>
                                    <h3 className='pb-4 pt-1 text-[14px] tracking-[4px]'>PULSES AND GRAINS</h3>
                                    <p className='text-[12px] pb-2'>Harsil Rajma
                                    </p>
                                    <p className='text-[12px]  pb-2'>Himalayan Gahat Dal
                                    </p>
                                    <p className='text-[12px]  pb-2'>Himalayan Red Rice</p>
                                    <p className='text-[12px]  pb-2'>Chakrata Rajma</p>
                                </div>
                                <div className="box flex flex-col justify-center items-start p-4 ">
                                    <div className=' flex gap-1 h-[100px] w-[200px]'>
                                        <img src={import.meta.env.BASE_URL + "/src/assets/product3.webp"} className='img21 object-cover ' alt="" />
                                    </div>
                                    <h3 className='pb-4 pt-1 text-[14px] tracking-[4px]'>PULSES AND GRAINS</h3>
                                    <p className='text-[12px] pb-2'>Harsil Rajma
                                    </p>
                                    <p className='text-[12px]  pb-2'>Himalayan Gahat Dal
                                    </p>
                                    <p className='text-[12px]  pb-2'>Himalayan Navrangi Dal
                                    </p>
                                    <p className='text-[12px]  pb-2'>Himalayan Red Rice</p>
                                    <p className='text-[12px]  pb-2'>Chakrata Rajma</p>
                                </div>
                                <div className="box flex flex-col justify-center items-start p-4 ">
                                    <div className=' flex gap-1 h-[100px] w-[200px]'>
                                        <img src={import.meta.env.BASE_URL + "/src/assets/product2.webp"} className='img21 object-cover ' alt="" />
                                    </div>
                                    <h3 className='pb-4 pt-1 text-[14px] tracking-[4px]'>PULSES AND GRAINS</h3>
                                    <p className='text-[12px] pb-2'>Harsil Rajma
                                    </p>
                                    <p className='text-[12px]  pb-2'>Himalayan Red Rice</p>
                                    <p className='text-[12px]  pb-2'>Chakrata Rajma</p>
                                </div>
                                <div className="box flex flex-col justify-center items-start p-4 ">
                                    <div className=' flex gap-1 h-[100px] w-[200px]'>
                                        <img src={import.meta.env.BASE_URL + "/src/assets/product1.webp"} className='img21 object-cover ' alt="" />
                                    </div>
                                    <h3 className='pb-4 pt-1 text-[14px] tracking-[4px]'>PULSES AND GRAINS</h3>
                                    <p className='text-[12px] pb-2'>Harsil Rajma
                                    </p>
                                    <p className='text-[12px]  pb-2'>Himalayan Gahat Dal
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <img src={import.meta.env.BASE_URL + "/src/assets/logoColor.webp"} alt="logo" className='px-8' />
                    <ul className='sm:hidden md:flex gap-0 flex flex-col md:flex-row md:gap-2 lg:gap-2 lg:flex-row justify-center items-center'>
                        <li className='md:hidden lg:flex' ><a href="">GIFTING</a></li>
                        <li><a href="">BEST SELLER</a></li>
                        <li><a href="">OUR STORY</a></li>
                    </ul>
                </div>
                <div className='gap-4 flex'>
                    {/* <span>login</span> */}
                    <span><a href="/auth">login</a></span>
                    <button className="cart-btn" onClick={onCartToggle}>
                        Cart
                    </button>

                    {/* <span onClick={togglefunc}>cart</span> */}
                    {/* <span><a href="/cart">cart</a></span> */}
                </div>
            </div>

            {/* <select name="" id="">
            <option value="">saur valley</option>
            <option value="">pindar valley</option>
            <option value="">darma valley</option>
            <option value="">ghee shakkar</option>
            <option value="">Corporate gifting</option>
            </select> */}
        </header>
    )
}

export default Navbar
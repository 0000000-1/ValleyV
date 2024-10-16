import React from 'react'

const Companydisplay = () => {
    return (
        <div className='m-8 '>
            <div className=''>
                <p className='text-center font-[bold] text-xl mb-10 '>YOU CAN FIND US AT</p>
            </div>
            <div className='flex flex-wrap gap-4 justify-center items-center'>
                <div className='img'>
                    <img className='' src={import.meta.env.BASE_URL + "/src/assets/companyTitle1.webp"} alt="ct1" />            
                </div>
                <div className='img'>
                    <img className='' src={import.meta.env.BASE_URL + "/src/assets/companyTitle2.webp"} alt="ct2" />
                </div>
                <div className='img'>
                    <img className='' src={import.meta.env.BASE_URL + "/src/assets/companyTitle3.webp"} alt="ct3" />
                </div>
                <div className='img'>
                    <img className='' src={import.meta.env.BASE_URL + "/src/assets/companyTitle4.webp"} alt="ct4" />
                </div>
                <div className='img'>
                    <img className='' src={import.meta.env.BASE_URL + "/src/assets/companyTitle5.webp"} alt="ct5" />
                </div>
                <div className='img'>
                    <img className='' src={import.meta.env.BASE_URL + "/src/assets/companyTitle6.webp"} alt="ct6" />
                </div>
                <div className='img'>
                    <img className='' src={import.meta.env.BASE_URL + "/src/assets/companyTitle7.webp"} alt="ct7" />
                </div>
                <div className='img'>
                    <img className='' src={import.meta.env.BASE_URL + "/src/assets/companyTitle8.webp"} alt="ct8" />
                </div>
                <div className='img'>
                    <img className='' src={import.meta.env.BASE_URL + "/src/assets/companyTitle9.webp"} alt="ct9" />
                </div>
                <div className='img'>
                    <img className='' src={import.meta.env.BASE_URL + "src/assets/companyTitle10.webp"} alt="ct10" />
                </div>
            </div>
        </div>
    )
}

export default Companydisplay
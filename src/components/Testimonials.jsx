import React from 'react'
import datatestimonial from "../assets/dumpdata"

const Testimonials = () => {
  return (
    <>
      <div className=' bg-yellow-500'>
        <h1 className='text-center font-[500] text-[24px] pt-6'>Our Customer Speaks for Us</h1>
        <div className=' h-[290px] px-4 flex flex-col justify-center gap-4 '>
          <div className='box flex gap-4 flex items-center w-full  overflow-scroll'>
            {datatestimonial.map((elem, index) => {
              return (
                <div className='textbox'>
                  <div className=" minibox box p-4 flex flex-col justify-center items-center ">
                    <div className='m-3 flex gap-1'>
                      <i class="fa fa-star text-[10px] " aria-hidden="true"></i>
                      <i class="fa fa-star text-[10px] " aria-hidden="true"></i>
                      <i class="fa fa-star text-[10px] " aria-hidden="true"></i>
                      <i class="fa fa-star text-[10px] " aria-hidden="true"></i>
                      <i class="fa fa-star text-[10px] " aria-hidden="true"></i>
                    </div>
                    <p className='text-[12px] text-center'>{datatestimonial[index].review}</p>
                    <h1 className='text-[18px] font-[500] pt-4'>{datatestimonial[index].name}</h1>
                    <p className='text-[12px]'>{datatestimonial[index].profile},{datatestimonial[index].address}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>

  )
}

export default Testimonials
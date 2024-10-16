import React from 'react'

const Bulkbuttonsection = () => {
  return (
    <div className='bbsCard'>
      <div className='h-[300px] w-full absolute z-[-1]'>
        <img src="../src/assets/bgforbutton.png" className='h-full w-full object-cover ' alt="bgforbutton" />
      </div>
      <div className='mobile:items-center text-center flex flex-col justify-center relative before:absolute before:z-[-1] before:h-[300px] before:w-full h-[300px] w-full items-center content before:opacity-60 before:bg-black text-gray-100' >
        <h1 className='font-[500] text-[2rem]'>Looking to buy in bulk</h1>
        <p>Our team is avaliable ready to help you with the process</p>
        <button className='bbsCard-btn px-4 my-2 py-2 bg-green-900'>Get in touch</button>
      </div>
    </div>
  )
}

export default Bulkbuttonsection
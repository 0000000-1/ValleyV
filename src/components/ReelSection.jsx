import React from 'react'

const ReelSection = () => {
  return (
    <div className='lg:p-8 p-4 oveflow-scroll w-screen'>
      <div className='box h-full w-full flex gap-2 overflow-scroll'>
        <video src={import.meta.env.BASE_URL + "/src/assets/BgIMG_5104.mp4"} className='h-[300px] w-[160px] md:h-[360px] md:w-[190px] rounded-md object-cover' data-type='mp4' autoPlay loop muted playsInline></video>
        <video src={import.meta.env.BASE_URL + "/src/assets/BgIMG_5104.mp4"} className='h-[300px] w-[160px] md:h-[360px] md:w-[190px] rounded-md object-cover' data-type='mp4' autoPlay loop muted playsInline></video>
        <video src={import.meta.env.BASE_URL + "/src/assets/BgIMG_5104.mp4"} className='h-[300px] w-[160px] md:h-[360px] md:w-[190px] rounded-md object-cover' data-type='mp4' autoPlay loop muted playsInline></video>
        <video src={import.meta.env.BASE_URL + "/src/assets/BgIMG_5104.mp4"} className='h-[300px] w-[160px] md:h-[360px] md:w-[190px] rounded-md object-cover' data-type='mp4' autoPlay loop muted playsInline></video>
        <video src={import.meta.env.BASE_URL + "/src/assets/BgIMG_5104.mp4"} className='h-[300px] w-[160px] md:h-[360px] md:w-[190px] rounded-md object-cover' data-type='mp4' autoPlay loop muted playsInline></video>
        <video src={import.meta.env.BASE_URL + "/src/assets/BgIMG_5104.mp4"} className='h-[300px] w-[160px] md:h-[360px] md:w-[190px] rounded-md object-cover' data-type='mp4' autoPlay loop muted playsInline></video>
      </div>
    </div>
  )
}

export default ReelSection
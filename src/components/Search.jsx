import React from 'react'

const Search = ({searchopen}) => {
  if (!searchopen) return null;
  
  return (
    <div className={`absolute bg-white text-black px-2 py-1 flex gap-4`}>
        <input type="text" className=' outline-none text-[.8rem]' />
        <span >icon</span>
    </div>
  )
}

export default Search
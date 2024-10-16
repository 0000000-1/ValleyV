import React from 'react'


const Cart = ({ isOpen, onCartToggle }) => {
  const content = ""
  if (!isOpen) return null;


  return (
    <div className={`cart-slideout ${isOpen ? 'cart-open' : ''} h-screen w-[300px] bg-gray-100 `}>
      <div className='flex justify-between items-center p-4'>
        <h1 className='font-[500] text-2xl'>Cart</h1>
        {/* <span onClick={onCartToggle}>X</span> */}
        <button className="cart-btn" onClick={onCartToggle}>
          X
        </button>
      </div>
      <hr />
      <div className='p-4'>
        {content === "" ? " Your Cart is currently empty." : "item"}
      </div>
    </div>
  )
}

export default Cart
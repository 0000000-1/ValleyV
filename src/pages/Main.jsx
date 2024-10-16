import React, { useState } from 'react'
import Home from './Home'
import Cart from '../components/Cart'

const Main = () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  if (!user) {
    window.location.href = '/login';
  }

  const [toggle,setToggle] = useState(false)
  return (
    <>
    <div className=''>

    <Cart toggle={toggle}/>
    <Home/>
    </div>
    </>
  )
}

export default Main
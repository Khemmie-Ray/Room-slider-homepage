import React, { useState } from 'react'
import roomLogo from '../assets/logo.svg'
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  function handleShowMenu () {
    setShowMenu(true)
  }

  function handleCloseMenu () {
    setShowMenu(false)
  }
   
  return (
    <header className='absolute lg:w-[50%] lg:left-24 lg:top-8 w-[100%]'>
      <div className='hidden lg:flex items-center lg:p-4 '>
        <a href="#" aria-label="home" className='lg:mr-10'><img src={roomLogo} alt="room logo" /></a>
      <nav >
        <ul className='flex text-white'>
          <li className='mr-10'><a href="index.html">home</a></li>
          <li className='mr-10'><a href="#">shop</a></li>
          <li className='mr-10'><a href="#">about</a></li>
          <li><a href="#">contact</a></li>
        </ul>
      </nav>
      </div>
   
      <div className='lg:hidden flex items-center py-8'>
        <IoMenuOutline className='text-[2rem] text-white ml-8' onClick={handleShowMenu} />
        <a href="#" aria-label="home" className='ml-36'><img src={roomLogo} alt="room logo" /></a>
      {showMenu && (<nav className='absolute top-0 w-[100%]'>
        <ul className='flex bg-white text-black h-[10vh] items-center px-4'>
          <IoMdClose className='text-[2rem] mr-10' onClick={handleCloseMenu}/>
          <li className='mr-10'><a href="index.html">home</a></li>
          <li className='mr-10'><a href="#">shop</a></li>
          <li className='mr-10'><a href="#">about</a></li>
          <li><a href="#">contact</a></li>
        </ul>
      </nav>)}
      </div>
    </header>
  )
}

export default Header
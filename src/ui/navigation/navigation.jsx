import React, { useState } from 'react'
import Logo from '@assets/icons/logo.svg'
import BurgerMenu from './burger_menu'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const lockScroll = (isOpen) => {
    const screenWidth = window.screen.width
    if (screenWidth <= 768) {
      let toggle
      if (!isOpen) {
        toggle = 'hidden'
      } else {
        toggle = 'auto'
      }
      let body = document.body.style
      body.overflowY = toggle
    }
  }

  return (
    <div className="flex justify-between mb-10  2xl:mb-28 lg:mb-20">
      <a href="#">
        <img src={Logo} alt="Logotype" />
      </a>
      <BurgerMenu
        lockScroll={lockScroll}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <ul
        className={`${
          isOpen ? 'top-0' : 'top-[-100vh]'
        } absolute left-0 bg-dark-blue transition-all text-white w-full h-[100vh] z-50 flex flex-col gap-8 text-2xl text-center p-8 md:bg-[transparent] md:static md:h-auto md:p-0 md:text-left md:w-auto md:flex-row md:gap-x-10 md:text-dark-blue xl:gap-x-20 md:text-sm uppercase`}
        onClick={() => {
          setIsOpen(!isOpen)
          lockScroll(isOpen)
        }}
      >
        <li className="hover:opacity-50 transition-opacity">
          <a href="#home">Home</a>
        </li>
        <li className="hover:opacity-50 transition-opacity">
          <a href="#about">About</a>
        </li>
        <li className="hover:opacity-50 transition-opacity">
          <a href="#project">Project</a>
        </li>
        <li className="hover:opacity-50 transition-opacity">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Navigation

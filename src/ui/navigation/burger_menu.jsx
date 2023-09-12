import React from 'react'

const BurgerMenu = ({ isOpen, setIsOpen, lockScroll }) => {
  return (
    <button
      className="relative w-[24px] h-[14px] md:hidden z-[51]"
      onClick={() => {
        setIsOpen(!isOpen)
        lockScroll(isOpen)
      }}
    >
      <div
        className={`absolute left-0 top-[0] w-[24px] h-[2px] transition-all ${
          isOpen ? 'rotate-45 top-[50%] bg-blue' : 'bg-dark-blue'
        }`}
      ></div>
      <div
        className={`absolute left-0 top-[50%] w-[24px] h-[2px] transition-all ${
          isOpen ? 'opacity-0 bg-blue' : 'bg-dark-blue'
        }`}
      ></div>
      <div
        className={`absolute left-0 top-[100%] w-[24px] h-[2px] transition-all ${
          isOpen ? '-rotate-45 top-[50%] bg-blue' : 'bg-dark-blue'
        }`}
      ></div>
    </button>
  )
}

export default BurgerMenu

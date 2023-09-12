import React from 'react'

const Button = (props) => {
  const { children, transparent = false, type = 'button' } = props
  return (
    <button
      className={
        transparent
          ? 'font-primary border-dark-blue border-solid border-[1px] px-6 py-[1.1rem] text-sm leading-tight backdrop-blur-sm hover:text-white hover:bg-dark-blue transition-all hover:scale-95'
          : 'font-primary border-dark-blue border-solid border-[1px] px-6 py-[1.1rem] text-sm leading-tight bg-dark-blue text-white hover:bg-opacity-0 hover:text-dark-blue transition-all hover:scale-95'
      }
      type={type}
    >
      {children}
    </button>
  )
}

export default Button

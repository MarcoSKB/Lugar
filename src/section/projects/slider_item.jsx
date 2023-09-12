import React from 'react'
import { location } from '@assets/icons'

const Slider_item = (props) => {
  const { title, subtitle, img } = props
  return (
    <div className="relative w-full max-w-[350px] min-h-[490px] flex items-end justify-center pb-[13%] font-primary">
      <img
        className="absolute w-full object-cover z-[-1]"
        src={img}
        alt="Card item"
      />
      <div className="relative flex flex-col z-2 bg-white py-6 px-5 w-full max-w-[290px] mb-[-13%]">
        <span className="text-dark-blue font-bold leading-[120%] text-sm mb-2">
          {title}
        </span>
        <span className="text-dark-blue font-normal leading-[120%] text-xs flex items-center">
          <img src={location} className="mr-1" alt="Location icon" />
          {subtitle}
        </span>
      </div>
    </div>
  )
}

export default Slider_item

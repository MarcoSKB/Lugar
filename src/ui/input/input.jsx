import React from 'react'

const Input = (props) => {
  const {
    placeholder = '',
    className = '',
    attributes,
    defaultValue,
    type = 'input',
  } = props

  if (type == 'textarea') {
    return (
      <textarea
        className={`py-[14px] px-[18px] placeholder:text-blue placeholder:text-lg placeholder:leading-[1.2] border-solid border-dark-blue border-[1px] focus:outline-none text-dark-blue text-lg leading-[1.2] resize-none ${className}`}
        placeholder={placeholder}
      />
    )
  }
  return (
    <input
      type={type}
      className={`py-[14px] px-[18px] placeholder:text-blue placeholder:text-lg placeholder:leading-[1.2] border-solid border-dark-blue border-[1px] focus:outline-none text-dark-blue text-lg leading-[1.2] ${className}`}
      placeholder={placeholder}
      defaultValue={defaultValue}
      {...attributes}
    />
  )
}

export default Input

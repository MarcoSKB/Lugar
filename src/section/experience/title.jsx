import React from 'react'

const Title = () => {
  return (
    <div className="font-primary flex flex-col gap-5 md:gap-6 lg:gap-10 max-w-[550px]">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-[120%] text-dark-blue">
        Award winning real estate company in Dubai
      </h2>
      <span className="text-base lg:text-lg text-blue leading-[120%] font-normal">
        Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra
        scelerisque. Ipsum, turpis facilisis tempor pulvinar in lobortis ornare
        magna.
      </span>
      <ul className="flex gap-5 md:gap-11 text-sm">
        <li className="flex flex-col">
          <span className="uppercase text-blue font-bold leading-[120%] mb-2">
            Previous projects
          </span>
          <span className="text-4xl lg:text-5xl text-dark-blue leading-[120%] font-light">
            34+
          </span>
        </li>
        <li className="flex flex-col">
          <span className="uppercase text-blue font-bold leading-[120%] mb-2">
            years experience
          </span>
          <span className="text-4xl lg:text-5xl text-dark-blue leading-[120%] font-light">
            20y
          </span>
        </li>
        <li className="flex flex-col">
          <span className="uppercase text-blue font-bold leading-[120%] mb-2">
            Ongoing projects
          </span>
          <span className="text-4xl lg:text-5xl text-dark-blue leading-[120%] font-light">
            12
          </span>
        </li>
      </ul>
    </div>
  )
}

export default Title

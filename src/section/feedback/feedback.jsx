import React from 'react'
import { Container } from '@components'
import { women_smiling } from '@assets/images'
import { quote } from '@assets/icons'

const Feedback = () => {
  return (
    <section className="font-primary pt-10 lg:pt-14 pb-10 md:pb-18 lg:pb-32 leading-[1.2]">
      <Container>
        <h2 className="text-dark-blue text-2xl md:text-3xl lg:text-5xl text-center mb-3 font-bold ">
          Few smiles and comment
        </h2>
        <span className="inline-flex justify-center w-full text-dark-blue text-base lg:text-lg mb-10 lg:mb-20 ">
          Turpis facilisis tempor pulvinar in lobortis ornare magna.
        </span>
        <div className="flex justify-between flex-col gap-[25px] lg:flex-row lg:gap-[125px] items-center">
          <img
            src={women_smiling}
            className="max-w-[445px] w-full"
            alt="Women smiling"
          />
          <div className="flex flex-col gap-[18px] text-center lg:text-left">
            <img
              src={quote}
              className="max-w-[50px] w-full hidden lg:block"
              alt="Quote icon"
            />
            <h3 className="text-dark-blue text-[24px] lg:text-[32px] font-bold">
              Dream house isn’t dream anymore
            </h3>
            <span className="text-dark-blue font-light text-lg md:text-xl lg:text-2xl max-w-[510px]">
              Semper arcu mauris aliquam lacus. Massa erat vitae ultrices
              pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar.
            </span>
            <span className="flex flex-col font-semibold text-lg md:text-xl lg:text-2xl text-dark-blue ">
              Brooklyn Simmons
              <span className="font-normal text-lg">Artist</span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Feedback

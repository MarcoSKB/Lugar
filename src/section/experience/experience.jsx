import React from 'react'
import { Container } from '@components'
import { building_02 } from '@assets/images'
import Title from './title'

const Experience = () => {
  return (
    <section className="py-10 md:py-20 lg:py-36" id="about">
      <Container className="flex flex-col items-center gap-[30px] md:flex-row md:gap-[40px] lg:gap-[125px]">
        <img
          className="w-[60%] md:w-[45%] max-w-[500px]"
          src={building_02}
          alt="White Building"
        />
        <Title />
      </Container>
    </section>
  )
}

export default Experience

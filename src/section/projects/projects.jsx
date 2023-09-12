import React from 'react'
import { Container } from '@components'
import Slider from './slider'

const Projects = () => {
  return (
    <section className="overflow-hidden pt-12 pb-10 md:pb-20" id="project">
      <Container>
        <h2 className="font-primary font-bold text-2xl md:text-3xl lg:text-5xl leading-[120%] text-dark-blue mb-3">
          Ongoing projects
        </h2>
        <span className="font-primary font-normal text-base lg:text-lg leading-[120%] text-blue">
          Turpis facilisis tempor pulvinar in lobortis ornare magna.
        </span>
        <Slider />
      </Container>
    </section>
  )
}

export default Projects

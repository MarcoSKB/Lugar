import React from 'react'
import { Container } from '@components'
import { Navigation, Button } from '@ui'
import { building_01 } from '@assets/images'
import curve_arrow from '@assets/icons/curve-arrow.svg'

const Main = () => {
  return (
    <main className="bg-blue pt-8 md:pt-11 relative" id="home">
      <img
        className="absolute bottom-0 right-0 pointer-events-none z-0 2xl:w-auto xl:opacity-100 md:w-[45%] w-[58%] sm:opacity-70"
        src={building_01}
        alt="Building in background"
      />
      <Container>
        <Navigation />
        <h1 className="text-[2rem] max-w-[350px] md:text-[3rem] md:max-w-[400px] lg:text-[4.5rem] lg:max-w-[500px] xl:text-[5.6rem] xl:max-w-[635px] leading-[1.2] font-primary font-bold text-dark-blue mb-[1.1rem] relative z-10">
          A home is built with love and dreams
          <img
            className="absolute right-0 bottom-[-35%] xl:block sm:hidden"
            src={curve_arrow}
            alt="Curve arrow"
          />
        </h1>
        <div className="flex flex-col relative z-10">
          <span className="font-primary text-dark-blue leading-tight md:text-lg text-sm mb-12 md:mb-8">
            Real estate farm that makes your dreams true
          </span>
          <div className="flex gap-8 xl:mb-44 md:mb-32 mb-12">
            <Button>
              <a href="#project">Our projects</a>
            </Button>
            <Button transparent={true}>
              <a href="#contact">Contact us</a>
            </Button>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default Main

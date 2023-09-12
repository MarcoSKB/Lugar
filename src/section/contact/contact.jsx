import React from 'react'
import { Container, ContactForm } from '@components'
import { green_house } from '@assets/images'

const Contact = () => {
  return (
    <section
      className="py-[20px] md:py-[50px] lg:py-[100px] font-primary leading-[1.2]"
      id="contact"
    >
      <Container className="flex lg:gap-[125px]">
        <img src={green_house} alt="Green House" className="hidden lg:block" />
        <div className="w-full lg:w-auto">
          <h2 className="font-bold text-dark-blue text-2xl md:text-3xl lg:text-5xl mb-3">
            Contact us
          </h2>
          <span className="inline-block text-blue text-base lg:text-lg mb-10">
            Turpis facilisis tempor pulvinar in lobortis ornare magna.
          </span>
          <ContactForm />
        </div>
      </Container>
    </section>
  )
}

export default Contact

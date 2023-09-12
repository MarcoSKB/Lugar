import React from 'react'
import { Container } from '@components'
import { logoWhite, location, phone, message } from '@assets/icons'

const Footer = () => {
  return (
    <footer className="bg-dark-blue font-primary text-sm pt-[50px] md:pt-[90px] pb-[30px] md:pb-[45px]">
      <Container>
        <div className="flex justify-between flex-col-reverse md:flex-row gap-10 md:gap-3 mb-10 md:mb-24">
          <div className="flex flex-col gap-y-5">
            <a href="##" className="max-w-[64px]">
              <img src={logoWhite} alt="Logotype" />
            </a>
            <ul className="flex flex-col gap-3 text-blue">
              <li className="flex items-start gap-2">
                <img src={location} alt="Location icon" />
                <span className="md:max-w-[137px] leading-4">
                  2118 Thornridge Cir. Dubai, UAE 35624
                </span>
              </li>
              <li className="flex gap-2">
                <img src={phone} alt="Phone icon" />
                <span>+33 415 65356 - 9</span>
              </li>
              <li className="flex gap-2">
                <img src={message} alt="Message icon" />
                <span>contact@lugar.com</span>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col md:flex-row gap-[32px] md:gap-[76px] text-center md:text-left">
              <li className="flex flex-col gap-3">
                <h3 className="uppercase text-lg text-white">Quick links</h3>
                <ul className="flex flex-col gap-3 text-blue">
                  <li className="hover:opacity-70 transition-opacity">
                    <a href="#home">Home</a>
                  </li>
                  <li className="hover:opacity-70 transition-opacity">
                    <a href="#about">About</a>
                  </li>
                  <li className="hover:opacity-70 transition-opacity">
                    <a href="#project">Project</a>
                  </li>
                  <li className="hover:opacity-70 transition-opacity">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </li>
              <li className="flex flex-col gap-3">
                <h3 className="uppercase text-lg text-white">Legal Links</h3>
                <ul className="flex flex-col gap-3 text-blue">
                  <li className="hover:opacity-70 transition-opacity">
                    <a href="##">Terms</a>
                  </li>
                  <li className="hover:opacity-70 transition-opacity">
                    <a href="##">Conditions</a>
                  </li>
                  <li className="hover:opacity-70 transition-opacity">
                    <a href="##">Policy</a>
                  </li>
                </ul>
              </li>
              <li className="flex flex-col gap-3">
                <h3 className="uppercase text-lg text-white">Social media</h3>
                <ul className="flex flex-col gap-3 text-blue">
                  <li className="hover:opacity-70 transition-opacity">
                    <a href="https://www.facebook.com/" target="_blank">
                      Facebook
                    </a>
                  </li>
                  <li className="hover:opacity-70 transition-opacity">
                    <a href="https://twitter.com/" target="_blank">
                      Twitter
                    </a>
                  </li>
                  <li className="hover:opacity-70 transition-opacity">
                    <a href="https://www.youtube.com/" target="_blank">
                      YouTube
                    </a>
                  </li>
                  <li className="hover:opacity-70 transition-opacity">
                    <a href="https://www.linkedin.com/" target="_blank">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <span className="text-blue text-xs">Copyright @ 2022 Lugar Inc.</span>
      </Container>
    </footer>
  )
}

export default Footer

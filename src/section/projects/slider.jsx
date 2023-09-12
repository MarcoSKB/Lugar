import React from 'react'
import { project_01, project_02, project_03, project_04 } from '@assets/images'
import { Swiper, SwiperSlide } from 'swiper/react'
import Slider_item from './slider_item'
import 'swiper/css'

const Slider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
          centeredSlidesBounds: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1130: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      className="overflow-x-visible mt-10 lg:mt-20"
    >
      <SwiperSlide>
        <Slider_item
          img={project_01}
          title="Vintage Villa"
          subtitle="2715 Ash Dr. San Jose, Dubai"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slider_item
          img={project_02}
          title="Tonga Villa"
          subtitle="1901 Thornridge Cir. Shiloh 81063"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slider_item
          img={project_03}
          title="Penthouse"
          subtitle="2464 Royal Ln. Mesa, 45463"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slider_item
          img={project_04}
          title="Smart city projecct"
          subtitle="2715 Ash Dr. San Jose, Dubai"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slider_item
          img={project_01}
          title="Vintage Villa"
          subtitle="2715 Ash Dr. San Jose, Dubai"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slider_item
          img={project_02}
          title="Tonga Villa"
          subtitle="1901 Thornridge Cir. Shiloh 81063"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slider_item
          img={project_03}
          title="Penthouse"
          subtitle="2464 Royal Ln. Mesa, 45463"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slider_item
          img={project_04}
          title="Smart city projecct"
          subtitle="2715 Ash Dr. San Jose, Dubai"
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider

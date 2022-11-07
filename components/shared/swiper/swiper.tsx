import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';

type Props = {
  loop: boolean
  spaceBetween: number,
  slidesPerView: number,
  slides: any[],
}

export const SwiperHelper = ({loop,spaceBetween,slidesPerView, slides}: Props) => {
  return (
      <Swiper
        loop={loop}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
      >
        {slides.map((slide,i)=>{
          return (
          <SwiperSlide key={`slide-${i}`}>
            {slide}         
          </SwiperSlide>
          )
        })}
      </Swiper>
  )
}
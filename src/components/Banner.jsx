import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import 'swiper/css/effect-fade';
import 'swiper/css'

const Banner = () => {
  return (
    <div className='w-xl mx-auto'>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect='fade'
        autoplay={{delay: 1000}}
        speed={1500}
        loop={true}
      >
        <SwiperSlide>
          <img className='w-full h-full object-cover' src="https://i.ibb.co.com/nqWzZ0hm/Language-Learning-1.png" alt="img1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-full object-cover' src="https://i.ibb.co.com/35tnC9H8/Language-Learning-2.png" alt="img2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-full object-cover' src="https://i.ibb.co.com/KxDxSj7J/Languages-Learning-3.png" alt="img3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
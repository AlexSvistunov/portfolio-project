import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

import "./TechSlider.scss";

const TechSlider = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide__inner" style={{backgroundColor: 'rgba(83, 193, 222, 1)'}}>
            <h3 className="slide__title">React</h3>
            {/* <img src="/react-icon.svg"></img> */}
          </div>
        </SwiperSlide>
  
        <SwiperSlide>
        <div className="slide__inner" style={{backgroundColor: 'rgba(48, 115, 192, 1)'}}>
            <h3 className="slide__title">Typescript</h3>
            {/* <img src="/react-icon.svg"></img> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>Redux Toolkit</SwiperSlide>
        <SwiperSlide>JavaScript</SwiperSlide>
        <SwiperSlide>Scss</SwiperSlide>
        <SwiperSlide>Css</SwiperSlide>

        {/* <SwiperSlide>TailWind</SwiperSlide>
        <SwiperSlide>HTML</SwiperSlide>
        <SwiperSlide>Jest</SwiperSlide>
        <SwiperSlide>Vite</SwiperSlide>
        <SwiperSlide>Gulp</SwiperSlide>
        <SwiperSlide>BEM</SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default TechSlider;

import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import Cards from "../Cards/Cards";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

import { Grid, Navigation, Mousewheel } from "swiper/modules";

export default function SwiperCards({ cards, isSong }) {
  const [SwiperRef, setSwiperRef] = useState(null);
  const handleSwiper = (event) => {
    if (event.target.id === "left-control-swiper") {
      SwiperRef.slideTo(SwiperRef.activeIndex - 1, 0);
    } else {
      SwiperRef.slideTo(SwiperRef.activeIndex + 1, 0);
    }
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={7}
        grid={{ rows: 1 }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
          1536: {
            slidesPerView: 7,
          },
        }}
        modules={[Navigation, Grid, Mousewheel]}
        navigation={true}
        mousewheel={true}
        onSwiper={setSwiperRef}
        style={{
          "--swiper-navigation-color": "#fefefe",
        }}
      >
        {cards.map(({ title, image, follows, likes, id }) => {
          return (
            <SwiperSlide key={id}>
              <Cards
                title={title}
                media={image}
                likes={likes}
                follows={follows}
              />
            </SwiperSlide>
          );
        })}
        <div slot="container-end">
          <div
            id="right-control-swiper"
            className={
              !SwiperRef
                ? "swiper-button-next"
                : SwiperRef.activeIndex !== cards.length - 1
                  ? "swiper-button-next swiper-button-disabled"
                  : "swiper-button-next"
            }
            onClick={handleSwiper}
          ></div>
          <div
            id="left-control-swiper"
            className={
              !SwiperRef
                ? "swiper-button-prev"
                : SwiperRef.activeIndex === 0
                  ? "swiper-button-prev swiper-button-disabled"
                  : "swiper-button-prev"
            }
            onClick={handleSwiper}
          ></div>
        </div>
      </Swiper>
    </>
  );
}

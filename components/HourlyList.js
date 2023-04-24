import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Image from "next/image";

export const HourlyList = (props) => {
  const res = props.hourlyWeather;
  return (
    <>
      <div className="container-swipe">
        <p className="font-bold pl-2">Next Hours</p>
        <Swiper
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 5,
            },
          }}
          spaceBetween={40}
          effect="fade"
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {res.map((value, key) => {
            return (
              <SwiperSlide key={key}>
                <div className="flex items-center justify-center flex-col border-r">
                  <div className="text-base font-normal text-gray-400">
                    <p>
                      {value.temp}
                      <span>&#8451;</span>
                    </p>
                    <p>{value.humidity}%</p>
                  </div>
                  <Image
                    src={`https://openweathermap.org/img/wn/${value.weather[0].icon}.png`}
                    alt="icon weather"
                    width={50}
                    height={60}
                  />
                  <div className="text-center pt-1 w-28 text-sm font-medium text-gray-900 truncate">
                    {value.dt}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

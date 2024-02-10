import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TimeForecast = (props) => {
    const {fetchedResult} = props

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        arrow: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              infinite: false,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
      };

  return (
    <div className="bg-[#1E293B] px-16 py-10 text-center text-white rounded-md mt-5">
            <h3 className="text-left text-2xl mb-5">Time Forecast</h3>
            <Slider {...settings}>
              {fetchedResult.forecast.forecastday[0].hour?.map((element) => {
                return (
                  <ul className="flex flex-col pr-2 border-r-[1px] text-center">
                    <h4 className="text-[#94A3B8]">
                      {element.time.split(" ")[1]}
                    </h4>
                    <span className="text-3xl flex justify-center text-yellow-400">
                      <img src={`https:${element.condition.icon}`} />
                    </span>
                    <h3>{element.temp_c}~</h3>
                  </ul>
                );
              })}
            </Slider>
    </div>
  )
}

export default TimeForecast
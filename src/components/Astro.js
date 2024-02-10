import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Astro = (props)=> {

  const {fetchedResult } = props;

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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
    <div className='bg-[#1E293B] px-16 py-10 text-center text-white rounded-md mt-5'>
        <h3 className="text-left text-2xl font-semibold mb-5">Day</h3>
        
        {fetchedResult && (
        <div className="">
          <Slider {...settings}>
                <div className="flex flex-col pr-2 border-r-[1px] text-center">
                    <h4 className="text-[#94A3B8]">Sunrise</h4>
                    <span className="text-3xl flex justify-center text-yellow-400">
                    {fetchedResult.forecast.forecastday[0].astro.sunrise}
                    </span>
                </div>
                <div className="flex flex-col pr-2 border-r-[1px] text-center">
                    <h4 className="text-[#94A3B8]">Sunset</h4>
                    <span className="text-3xl flex justify-center text-yellow-400">
                    {fetchedResult.forecast.forecastday[0].astro.sunset}
                    </span>
                </div>
                <div className="flex flex-col pr-2 border-r-[1px] text-center">
                    <h4 className="text-[#94A3B8]">Moonrise</h4>
                    <span className="text-3xl flex justify-center text-yellow-400">
                    {fetchedResult.forecast.forecastday[0].astro.moonrise}
                    </span>
                </div>
                <div className="flex flex-col pr-2 text-center">
                    <h4 className="text-[#94A3B8]">Moonset</h4>
                    <span className="text-3xl flex justify-center text-yellow-400">
                    {fetchedResult.forecast.forecastday[0].astro.moonset}
                    </span>
                </div>
            </Slider>
          </div>
        )}
    </div>
  )
}

export default Astro
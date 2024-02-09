import React, { useCallback, useEffect, useState } from "react";
import { WiDaySunny } from "react-icons/wi";
import Days from "./Days";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Astro from "./Astro";

const Dashboard = (props) => {
  const { profession } = props;
  const [fetchedResult, setfetchedResult] = useState();
  const [state,setState] = useState("London")
  const [searchCountry,setSearchCountry] = useState("")

  const FetchData = async () => {
    try {
      if(profession=="farmer"){
        setState("India")
      }
  
      const api_key = "1ea250a14ab0461d8f6130432240902";
      const url = (`https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${state}&alerts=yes&aqi=yes&days=7`);
  
      const Data = await fetch(url);
  
      if (!Data.ok) {
        throw new Error(`HTTP error! Status: ${Data.status}`);
      }
      
      const result = await Data.json();
      setfetchedResult(result);
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
    }
  };

  const Search = async () => {
    try {
      const api_key = "1ea250a14ab0461d8f6130432240902";
      const url = (`https://api.weatherapi.com/v1/search.json?key=${api_key}&q=${searchCountry}`);
  
      const res = await fetch(url)

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json()

      if (Array.isArray(data) && data.length > 0 && data[0].country) {
        console.log(data[0].country);
        setState(data[0].country);
      } else {
        throw new Error('Invalid data structure in API response');
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    Search()
  },[searchCountry])

  useEffect(() => {
    FetchData();
  }, [state]);

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
          slidesToShow: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full flex flex-row p-10 content-center justify-between">
      {fetchedResult && (
        <div className="w-[50vw] h-max ">
          <div className="w-[100%] bg-[#1E293B] text-white rounded-md mb-5 outline-none">
            <input
              placeholder="Search..."
              className="bg-[#1E293B] text-white rounded-md w-[100%] py-2 px-4"
              onChange={event => setSearchCountry(event.target.value)}
            />
          </div>
          <div className="bg-[#1E293B] p-16 text-center text-white rounded-md">
            <div className="flex justify-between pb-5">
              <div className="text-left">
                <h1 className=" text-3xl text-[D9D9E3] font-semibold">
                  {fetchedResult.location.name}
                </h1>
                <h1 className=" text-3xl text-[D9D9E3] font-semibold">
                  {fetchedResult.current.temp_c}~
                </h1>
                <span>AQI : {fetchedResult.current.air_quality.pm10}</span>
              </div>
              <div>
                <span className="text-5xl flex justify-center">
                  <WiDaySunny />
                </span>
              </div>
            </div>
            <div>
              <div className="flex flex-row justify-between">
                <h3>Wind</h3>
                <p>{fetchedResult.current.wind_kph}</p>
              </div>
              <div className="flex flex-row justify-between">
                <h3>Cloud</h3>
                <p>{fetchedResult.current.cloud}</p>
              </div>
            </div>
          </div>

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
          
          {/* shows this component with condition */}
          {(profession === "farmer" || profession === "traveller") && (
            <>
              <Astro fetchedResult={fetchedResult}/>
            </>
          )}
        </div>
      )}
      
      {profession === "farmer" && (
        <>
          <Days fetchedResult={fetchedResult}/>
        </>
      )}
    </div>
  );
};

export default Dashboard;

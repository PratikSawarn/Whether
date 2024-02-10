import React from 'react'
import { WiDaySunny } from "react-icons/wi";


const Hero = (props) => {

    const { fetchedResult } = props

  return (
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
                <h3>Wind Speed</h3>
                <p>{fetchedResult.current.wind_kph} kmp</p>
              </div>
              <div className="flex flex-row justify-between">
                <h3>Cloud</h3>
                <p>{fetchedResult.current.cloud}</p>
              </div>
            </div>
          </div>
  )
}

export default Hero
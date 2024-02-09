import React from 'react'

const Astro = (props)=> {

  const {fetchedResult } = props;

  return (
    <div className='bg-[#1E293B] px-16 py-10 text-center text-white rounded-md mt-5'>
        <h3 className="text-left text-2xl font-semibold mb-5">Day</h3>
        {fetchedResult && (
        <div className="flex flex-row ">
                <ul className="flex flex-col pr-2 border-r-[1px] text-center">
                    <h4 className="text-[#94A3B8]">Sunrise</h4>
                    <span className="text-3xl flex justify-center text-yellow-400">
                    {fetchedResult.forecast.forecastday[0].astro.sunrise}
                    </span>
                </ul>
                <ul className="flex flex-col pr-2 border-r-[1px] text-center">
                    <h4 className="text-[#94A3B8]">Sunset</h4>
                    <span className="text-3xl flex justify-center text-yellow-400">
                    {fetchedResult.forecast.forecastday[0].astro.sunset}
                    </span>
                </ul>
                <ul className="flex flex-col pr-2 border-r-[1px] text-center">
                    <h4 className="text-[#94A3B8]">Moonrise</h4>
                    <span className="text-3xl flex justify-center text-yellow-400">
                    {fetchedResult.forecast.forecastday[0].astro.moonrise}
                    </span>
                </ul>
                <ul className="flex flex-col pr-2 text-center">
                    <h4 className="text-[#94A3B8]">Moonset</h4>
                    <span className="text-3xl flex justify-center text-yellow-400">
                    {fetchedResult.forecast.forecastday[0].astro.moonset}
                    </span>
                </ul>
            
          </div>
        )}
    </div>
  )
}

export default Astro
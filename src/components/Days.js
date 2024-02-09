import React from 'react'

const Days = (props)=> {

  const { fetchedResult } = props

  return (
      <div className='w-[45vw] px-10 text-center bg-[#1E293B] rounded-xl text-white ml-5'>
        {fetchedResult && (

        <div className="">
              <h3 className="text-left my-4 font-medium">7-Days Forecast</h3>
                {fetchedResult.forecast.forecastday.map((element)=>{
                  return <ul className="flex flex-row justify-between py-4 px-6  mb-5 border-b-[1px]">
                        <p>{element.date}</p>
                        <div className="flex flex-row text-[#94A3B8]">
                          <span className="text-xl text-center text-yellow-400 ml-2">
                            <img src={`${element.day.condition.icon}`}/>
                          </span>
                         
                        </div>
                        <p>{element.day.avgtemp_c}~</p>
                      </ul>
                })}
        </div>
        )}
      </div>
  )
}

export default Days
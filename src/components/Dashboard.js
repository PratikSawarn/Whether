import React, { useEffect, useState } from "react";
import Days from "./Days";
import Astro from "./Astro";
import TimeForecast from "./TimeForecast";
import Hero from "./Hero.section";

const Dashboard = (props) => {

  // coordinates
  const {coordinates} = props

  const [profession, setProfession] = useState('farmer');
  const [fetchedResult, setfetchedResult] = useState();
  const [state,setState] = useState(coordinates)
  const [searchCountry,setSearchCountry] = useState()

  const handleProfessionClick = (profesion)=> {
    setProfession(profesion)
  }

  const FetchData = async () => {
    try {
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

  // ---------------------Search function---------- 
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


  return (
    <div className="w-full flex flex-col md:flex-row p-10 content-center justify-between">
      {fetchedResult && (
        <div className="w-full md:w-[50vw] h-max ">
          <div className="w-[100%] bg-[#1E293B] text-white rounded-md mb-5 outline-none">
            <input
              placeholder="Search..."
              className="bg-[#1E293B] text-white rounded-md w-[100%] py-2 px-4"
              onChange={event => setSearchCountry(event.target.value)}
            />
          </div>
          <div className="w-[100%] bg-[#1E293B] text-white rounded-md mb-5 outline-none py-2 pl-3">
            <button className="py-2 px-4 bg-[#0F172A] rounded-md text-white mr-2 hover:text-[#b5bcc9]" onClick={e => handleProfessionClick('farmer')}>Farmer</button>
            <button className="py-2 px-4 bg-[#0F172A] rounded-md text-white hover:text-[#b5bcc9]" onClick={e => handleProfessionClick('traveller')}>Traveller</button>
          </div>

          
          {(profession === "farmer" || profession === "traveller") && (
            <>
              <Hero fetchedResult={fetchedResult} />
            </>
          )}
          
          {(profession === "farmer" || profession === "traveller") && (
            <>
              <TimeForecast fetchedResult={fetchedResult}/>
            </>
          )}
          
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

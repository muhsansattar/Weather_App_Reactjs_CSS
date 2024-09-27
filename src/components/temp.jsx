import React, { useEffect, useState } from "react";
import WeatherCard from "./weatherCard";
import '../App';

const Temp = () => {
    const [searchValue, setSearchValue]=useState("okara");
    const [tempInfo, setTempInfo]=useState({});
    const getWeatherInfo=async ()=>{
        try{
          let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=300796e6b96391110d3644c0c3b88786`
          let response=await fetch(url);
          let data=await response.json();
          console.log("APi data = ",data)
          const {temp,humidity,pressure}=data.main;
          const {main:weathermood}=data.weather[0]
          const {name}=data;
          const {speed}=data.wind;
          const {country,sunset}=data.sys;
          const myNewWeatherInfo={
            temp,
            humidity,
            pressure,
            weathermood,
            name,
            speed,
            country,
            sunset
          }
          console.log(myNewWeatherInfo);
          setTempInfo(myNewWeatherInfo);
        }
        catch(error){
            console.log(error)

        }
    }
    useEffect(()=>{
     getWeatherInfo();
    },[])
    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input
                        type="search"
                        placeholder="search...."
                        autoFocus
                        id="search"
                        className="searchTerm"
                        value={searchValue}
                        onChange={(e)=>setSearchValue(e.target.value)}
                    />
                    <button 
                        className="searchButton"
                        type="button"
                        onClick={getWeatherInfo}
                        >
                        Search
                    </button>
                </div>
            </div>
            {/* here i am gonna making temprature card */}
           <WeatherCard tempInfo={tempInfo}/>
        </>
    )
}
export default Temp;
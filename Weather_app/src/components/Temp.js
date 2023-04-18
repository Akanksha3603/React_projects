import React, { useEffect, useState } from "react";
import "./style.css";
import Weather from "./Weather";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("pune");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=6029b9ceacc37aacd184b7410d30c550`;

      const res = await fetch(url);
      const data = await res.json();

      const {temp, humidity, pressure} = data.main;
      const {main: weathermood}= data.weather[0];
      const {name}= data;
      const {speed} = data.wind;
      const {country, sunset} = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      }

      setTempInfo(myNewWeatherInfo);

      console.log(temp);
    }catch (error){
      console.log(error);
    }
  }

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="container">
        <div className="search">
          <input
            type="search"
            placeholder="search...."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="btn" type="button" onClick={getWeatherInfo}>
            Search
          </button>
        </div>

        
      </div>
      <Weather tempInfo={tempInfo}/>
    </>
  );
};

export default Temp;

import React, { useEffect, useState } from "react";
import "./style.css";

const Weather = ({ tempInfo }) => {
  const [weatherState, setWeatherState] = useState("");
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = tempInfo;
  
  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState("wi wi-day-cloudy ");
          break;

        case "Rain":
          setWeatherState("wi wi-day-rain ");
          break;

        case "Clear":
          setWeatherState("wi wi-day-sunny ");
          break;

        case "Smoke":
          setWeatherState("wi wi-smoke ");
          break;

        case "Humid":
          setWeatherState("wi wi-day-humid ");
          break;
        default:
          break;
      }
    }
  }, [weathermood]);

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <div className="container1">
        <article className="card">
          <div className="weathericon">
            <i className={`wi ${weatherState}`}></i>
          </div>
          <div className="info">
            <div className="temp temptext">
              <span>{temp}</span>
            </div>

            <div className="temp">
              <div className="condi">{weathermood}</div>
              <div className="place">
                {name}, {country}
              </div>
            </div>

            <div className="temp temp1">{new Date().toLocaleString()}</div>
          </div>

          <article className="card card1">
            <div className="section">
              <div className="extra">
                <p>
                  <i className={"wi wi-sunset icon"}></i>
                </p>
                <p className="extra-info">
                  {humidity}
                  <br />
                  Humidity
                </p>
              </div>
                
              <div className="extra">
                <p>
                  <i className={"wi wi-humidity icon"}></i>
                </p>
                <p className="extra-info">
                  {speed} <br />
                  Wind
                </p>
              </div>

              <div className="extra">
                <p>
                  <i className={"wi wi-rain icon"}></i>
                </p>
                <p className="extra-info">
                  {pressure} <br />
                  Pressure
                </p>
              </div>

              <div className="extra">
                <p>
                  <i className={"wi wi-snow icon"}></i>
                </p>
                <p className="extra-info">
                  {timeStr} <br /> sunset
                </p>
              </div>
            </div>
          </article>
        </article>
      </div>
    </>
  );
};

export default Weather;

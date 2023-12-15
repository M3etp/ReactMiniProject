"use client";

import React, { useEffect, useState } from "react";

function WeatherCard({city}) {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null)

  const apiKey = "b4d924aaf04a5e28ee07079a1e369647";

  useEffect(() => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("City not found or enter valid city name");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the weather data here
        setWeatherData(data);
        setError(null)
      })
      .catch((error) => {
        // Handle errors here
        setError(error.message);
        console.error("Error fetching weather data:", error);
      });
  }, [apiKey, city]);

    const imgObj = {
        Clear: 'https://openweathermap.org/img/wn/01d@2x.png',
        Clouds: 'https://openweathermap.org/img/wn/03d@2x.png',
        Thunderstorm: 'https://openweathermap.org/img/wn/11d@2x.png',
        Drizzle: 'https://openweathermap.org/img/wn/09d@2x.png',
        Rain: 'https://openweathermap.org/img/wn/10d@2x.png',
        Snow: 'https://openweathermap.org/img/wn/13d@2x.png',
        Mist: 'https://openweathermap.org/img/wn/50d@2x.png',
        Smoke: 'https://openweathermap.org/img/wn/50d@2x.png',
    }




  return (
    <>
      {error ? (
        <div className="flex justify-center mt-4 text-red-600">
          {error}
        </div>
      ) : (
      
      weatherData && (
        <div className="flex justify-center mt-[25px]">
          <div className="card  min-w-sm max-w-sm border border-gray-100 bg-gray-50   transition-shadow test  shadow-lg hover:shadow-shadow-xl w-full bg-green-600 text-purple-50 rounded-md">
            <h2 className="text-md mb-2 px-4 pt-4">
              <div className="flex justify-between">
                <div className="badge relative top-0">
                  <span className="mt-2 py-1 h-12px text-md font-semibold w-12px  rounded right-1 bottom-1 px-4">
                    {city}
                  </span>
                </div>
                <span className="text-lg font-bold ">{weatherData.weather[0].main}</span>
              </div>
            </h2>

            <div className="flex items-center p-4">
              <div className="flex justify-center items-center w-96">
                <span><img src={imgObj[weatherData.weather[0].main]} /></span>
              </div>
            </div>
            <div className="text-md pt-4 pb-4 px-4">
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <span className="flex space-x-2 items-center">
                    <span>{(weatherData.wind.speed*3.6).toFixed(2)}km/h</span>
                  </span>
                  <span className="flex space-x-2 items-center">
                    <svg
                      height="20"
                      width="20"
                      viewBox="0 0 32 32"
                      className="fill-current"
                    >
                      <path d="M16,24V22a3.2965,3.2965,0,0,0,3-3h2A5.2668,5.2668,0,0,1,16,24Z"></path>
                      <path d="M16,28a9.0114,9.0114,0,0,1-9-9,9.9843,9.9843,0,0,1,1.4941-4.9554L15.1528,3.4367a1.04,1.04,0,0,1,1.6944,0l6.6289,10.5564A10.0633,10.0633,0,0,1,25,19,9.0114,9.0114,0,0,1,16,28ZM16,5.8483l-5.7817,9.2079A7.9771,7.9771,0,0,0,9,19a7,7,0,0,0,14,0,8.0615,8.0615,0,0,0-1.248-3.9953Z"></path>
                    </svg>{" "}
                    <span>{weatherData.main.humidity}%</span>
                  </span>
                </div>
                <div>
                  <h1 className="text-6xl"> {(weatherData.main.temp - 273).toFixed(1)}°C</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
      )}
    </>
  );
}

export default WeatherCard;

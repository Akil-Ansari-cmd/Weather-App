import React, { useState, useEffect } from "react";
import {
  WiDayCloudy,
  WiThermometer,
  WiHumidity,
  WiStrongWind,
  WiBarometer,
  WiSunrise,
  WiSunset
} from "react-icons/wi";
import { FaSearch } from "react-icons/fa";
import { WeatherApi } from "../Services";
import Loader from "./Loader";

const Weather = () => {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("Lucknow");


  const DataApi = async () => {
    const response = await WeatherApi(searchQuery);
    console.log("Weather data:", response);

    if (response) {
      setData(response);
    }
  };


  const handleSearch = () => {
    setSearchQuery(location);
  };


  useEffect(() => {
    DataApi();
  }, [searchQuery]);


  if (!data) return <div className="text-center mt-10 text-xl"><Loader /></div>;

  return (
    <div
      style={{
        backgroundImage: "url(https://images.pexels.com/photos/16676576/pexels-photo-16676576/free-photo-of-a-beautiful-red-canoe-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
      }}
      className="flex justify-center items-center bg-cover bg-fixed h-screen p-6"
    >
      <div className=" glass  xl:min-w-xl lg:min-w-lg md:min-w-md min-w-sm bg-white bg-opacity-30 backdrop-blur-md h-[90vh] sm:w-1/2 md:w-1/3 lg:w-1/3 p-6 shadow-xl rounded-2xl overflow-y-auto">
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Enter location"
            className="flex-1 p-2 border bg-white border-gray-300 rounded-l-lg outline-none"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button
            className="p-2 cursor-pointer bg-blue-500 text-white rounded-r-lg"
            onClick={handleSearch}
          >
            <FaSearch />
          </button>
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">Weather in {data.name}</h2>
        <div className="flex justify-center mb-4">
          <WiDayCloudy className="text-6xl cursor-pointer text-blue-500" />
        </div>
        <p className="text-lg text-center capitalize">{data.weather[0].description}</p>
        <div className="mt-4 space-y-2">
          <p className="flex items-center text-lg">
            <WiThermometer className="mr-2 text-red-500" /> Temp: {data.main.temp}°C
          </p>
          <p className="flex items-center text-lg">
            <WiHumidity className="mr-2 text-blue-500" /> Humidity: {data.main.humidity}%
          </p>
          <p className="flex items-center text-lg">
            <WiStrongWind className="mr-2 text-gray-500" /> Wind Speed: {data.wind.speed} m/s
          </p>
          <p className="flex items-center text-lg">
            <WiBarometer className="mr-2 text-green-500" /> Pressure: {data.main.pressure} hPa
          </p>
          <p className="flex items-center text-lg">
            <WiSunrise className="mr-2 text-orange-500" /> Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
          </p>
          <p className="flex items-center text-lg">
            <WiSunset className="mr-2 text-purple-500" /> Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>

  );
};

export default Weather;





